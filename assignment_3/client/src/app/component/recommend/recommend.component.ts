import { Component, OnInit, NgZone, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import * as Highcharts from 'highcharts/highstock';
import { NewService } from 'src/app/service/new.service';
import IndicatorsCore from 'highcharts/indicators/indicators';
import volumebyprice from 'highcharts/indicators/volume-by-price';
import { SearchHistoryService } from 'src/app/service/searchHistory.service';

IndicatorsCore(Highcharts);
volumebyprice(Highcharts);

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
})

export class RecommendComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'stockChart';
  updateFlag: boolean = false;
  oneToOneFlag: boolean = true;
  runOutsideAngular: boolean = false;
  showWatchlistAlert: boolean = false;

  coption = {};
  hostList = [];
  polygonAggsVw = 0.00;
  polygonAggsPriceC;
  polygonAggsPercent;
  polygonAggsTime;

  priceH = 0.00;
  pricel = 0.00;
  priceo = 0.00;
  pricep = 0.00;

  finnhunbQuote;
  ticker = '';
  marketstatus;
  marketServerTime;
  isWatchlist = -1;
  buyResult = false;
  buytotal = 0;
  sellTotal =  0;
  walletmoney = -1;
  portfolio = null;
  boughtQuantity = 0;
  boughtTotal = 0;
  peers = Array();
  buySuccess = 'Bought';
  timer: any;
  tabs = "Summary";
  tabFrom;
  tabto;
  topNews = [];
  topNewsDetail;
  chartsData = [];
  chartoption = {};
  insightsData = [];
  insightsoption;
  earningOption;
  msprPositive; msprNagtive; msprTotal;
  changePositive; changeNagtive; changeTotal;
  sellButtonDisabled : boolean;

  constructor(
    public server: NewService, 
    public route: ActivatedRoute,
    private ngZone:NgZone, 
    public router: Router,
    private el:ElementRef,
    private searchHistoryService: SearchHistoryService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.walletmoney = -1;
      this.isWatchlist = -1;
      if((params.ticker == 'home' || params.ticker == 'HOME') && this.searchHistoryService.searchHistory?.length == 0){
        return;
      }else if((params.ticker == 'home' || params.ticker == 'HOME') && this.searchHistoryService.searchHistory?.length > 0){
        this.router.navigate(['search', this.searchHistoryService.searchHistory]);
        this.searchHistoryService.searchHistory = '';
        return ; 
      }
      if(this.searchHistoryService.searchHistory?.length > 0 || params.ticker.length > 0){
        let searchTicker = params.ticker != this.searchHistoryService.searchHistory ? params.ticker.toUpperCase(): this.searchHistoryService.searchHistory;
        var paramsSearch = { key: searchTicker};
        const promise = this.server.searchStock(paramsSearch);
        promise
          .then((result) => {
            let arr = [];
            Object.keys(result).map(function (key) {
              arr[key] = result[key];
            });
            this.hostList = arr;
            this.searchHistoryService.searchHistory = this.hostList['ticker'];
            if(!this.hostList['ticker']){
              this.hostList['f'] = true;
              return true;
            } {
              this.hostList['f'] = false;
            }

            //Search polygon
            const pPromise = this.server.polygonAggs(paramsSearch);
            pPromise
              .then((result) => {
                this.ticker = result.ticker;

                //Finnhub quote
                const promiseQuote = this.server.finnhubQuote(paramsSearch);
                promiseQuote.then((result) => {
                  this.polygonAggsVw = Number(result.c);
                  this.polygonAggsPriceC = Number(result.d);
                  this.polygonAggsPercent = Number(result.dp);
                  this.polygonAggsPercent = this.polygonAggsPercent.toFixed(2);
                  this.marketServerTime = Number(result.t) * 1000;
                  this.polygonAggsTime = this.marketServerTime;
                  let usUnixTime = Number(new Date());
                  this.marketstatus = usUnixTime - this.marketServerTime < 5 * 60 * 1000 ? "open" : "closed";

                  this.priceH = result.h;
                  this.pricel = result.l;
                  this.priceo = result.o;
                  this.pricep = result.pc;

                  //Update price when open
                  if (this.marketstatus == 'open')
                    this.timer = setInterval(() => {
                      this.ngZone.run(() => {
                        const promiseQuote = this.server.finnhubQuote(paramsSearch);
                        promiseQuote.then((resultZ) => {
                          this.polygonAggsVw = Number(resultZ.c);
                          this.polygonAggsPriceC = Number(resultZ.d);
                          this.polygonAggsPercent = Number(resultZ.dp);
                          this.polygonAggsPercent = this.polygonAggsPercent.toFixed(2);
                          this.marketServerTime = Number(resultZ.t) * 1000;
                          this.polygonAggsTime = this.marketServerTime;
                          let usUnixTime = Number(new Date());
                          this.marketstatus = usUnixTime - this.marketServerTime < 5 * 60000 ? "open" : "closed";
                          this.priceH = result.h;
                          this.pricel = result.l;
                          this.priceo = result.o;
                          this.pricep = result.pc;
                        })
                      });
                    }, 15000);
                }).catch((err) => {
                  throw err;
                });
                if (typeof result.results == "object") {
                  const options = {
                    documentName: 'watchlist',
                    params: {
                      ticker: this.ticker
                    }
                  }
                  const Promise = this.server.getData(options);
                  Promise.then((result) => {
                    this.isWatchlist = result.length;
                    this.getThisPortFolio();
                  }).catch((err) => {
                    throw err;
                  });
                  
                }
            })
            .catch((err) => {
                throw err;
            });

          })
          .catch((err) => {
            throw err;
          });
      }
    });
  }

  getThisPortFolio(): void{
    let optionsPf = {
      documentName: 'portfolio',
      params: {
        ticker: this.ticker
      }
    }
    const PromisePf = this.server.getData(optionsPf);
    PromisePf.then((resultPf) => {
      if (typeof resultPf[0] == "object") {
        resultPf[0].quantity = parseFloat(resultPf[0].quantity);
        resultPf[0].total = parseFloat(resultPf[0].total);
        this.portfolio = resultPf[0];

        this.sellTotal = this.boughtTotal = parseFloat(this.portfolio.total);
        this.boughtQuantity = parseFloat(this.portfolio.quantity);
        this.buySuccess = "bought";
      }
      
      this.getWallet();
    }).catch((err) => {
      throw err;
    });
  }

  //Save Watchlist
  saveWatchList(): void {
    const options = {
      documentName: 'watchlist',
      params: {
        ticker: this.hostList['ticker'],
        name: this.hostList['name'],
        vw: this.polygonAggsVw,
        percent: this.polygonAggsPercent,
        price: this.polygonAggsPriceC
      }
    };
    this.server.createData(options)
      .then((results) => {
        this.isWatchlist = results == 'ok' ? 1 : 0;
        if (this.isWatchlist) {
          this.showWatchlistAlert = true;
          setTimeout(() => this.showWatchlistAlert = false, 3000);
        }
      })
      .catch((err) => {
        console.error('Error adding to watchlist:', err);
      });
  }

  getWallet(): void {
    this.walletmoney = -1;

    let options = {
      documentName: 'wallet',
      params: {}
    }
    const Promise = this.server.getData(options);
    Promise.then((result) => {
      if (typeof result[0] == "object") {
        this.walletmoney = parseFloat(result[0].money);
      }else{
        this.walletmoney = 0
      }
      this.tabsChanges('Summary');
    }).catch((err) => {
      throw err;
    });
  }

  buyModal(): void {
    if(this.portfolio?.length > 0){
      this.boughtTotal += this.portfolio.total;
      this.boughtQuantity += this.portfolio.quantity;
      this.buySuccess = "bought";
    }else if(this.portfolio?.length == 0){
      const options = {
        documentName: 'wallet',
        params: {
          money: 25000,
        }
      }
      const savePromise = this.server.createDataI(options);
      savePromise.
        then((results) => {
          this.walletmoney = 25000;
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  // Calculate stock when purchase
  calculateBuyQuantity(quantity): void {
    this.buytotal = parseFloat((this.polygonAggsVw * parseFloat(quantity)).toFixed(2));
    this.buytotal = isNaN(this.buytotal) ? 0 :this.buytotal;
  }
  // Calculate stock when sell
  calculateSellQuantity(quantity): void {
    this.sellTotal = parseFloat((this.polygonAggsVw * parseFloat(quantity)).toFixed(2));
    this.sellTotal = isNaN(this.sellTotal) ? 0 :this.sellTotal;
    this.sellButtonDisabled = this.portfolio?.quantity < parseFloat(quantity) || this.sellTotal == 0 ? true : false;
  }

  // Buy button
  buy(quantity): void {
    quantity = parseFloat(quantity);
    if(this.portfolio?.length == 0 || this.portfolio == null){ 
      let params = {
        ticker: this.ticker,
        name: this.hostList['name'],
        pricevw: this.polygonAggsVw,
        quantity: quantity,
        total: this.buytotal
      };
      const options = {
        documentName: 'portfolio',
        params: params
      }
      const savePromise = this.server.createDataI(options);
      savePromise.then((results) => {
        this.buyResult = results == "ok" ? true : false;
        if (this.buyResult === true) {
          this.boughtQuantity = params.quantity;
          this.boughtTotal = params.total;
          let options = {
            documentName: 'wallet',
            params: {
              money: (this.walletmoney - this.buytotal).toFixed(2)
            }
          };
          const savePromise = this.server.updateData(options);
          savePromise.
            then((results) => {
              this.buySuccess = "Bought";
            })
        }
      }).catch((err) => {
          throw err;
      });
    }else{
      var options = {
        documentName: 'portfolio',
        data: { 
          quantity: quantity + this.portfolio.quantity,
          pricevw: ((this.buytotal + this.portfolio.total)/(quantity + this.portfolio.quantity)).toFixed(2),
          total: parseFloat((this.buytotal + this.portfolio.total).toFixed(2))
        },
        filter: { _id: this.portfolio._id, },
      }
      const Promise = this.server.updateOne(options);
      Promise.then((results) => {
        this.boughtQuantity = options.data.quantity;
        this.boughtTotal = options.data.total;
        let optionsWallet = {
          documentName: 'wallet',
          params: {
            money: parseFloat((this.walletmoney - this.buytotal).toFixed(2))
          }
        };
        const savePromise = this.server.updateData(optionsWallet);
        savePromise.
          then((results) => {
            this.buySuccess = "Bought";
            this.buyResult = results == "ok" ? true : false;
            this.walletmoney = optionsWallet.params.money;
            let timer = null;
            timer = setTimeout(() => {
              this.buyResult = false;
            }, 5000);
          })
      }).catch((err) => {
        throw err;
      });
    }
  }

  // Sell
  sell(quantity): void {
    quantity = parseInt(quantity);
    if(this.portfolio.quantity > quantity){
      var options = {
        documentName: 'portfolio',
        data: { 
          quantity: this.portfolio.quantity - quantity,
          total: parseFloat((this.portfolio.total - this.sellTotal).toFixed(2))
        },
        filter: { _id: this.portfolio._id, },
      }
      const Promise = this.server.updateOne(options);
      Promise.then((results) => {
        let optionsWallet = {
          documentName: 'wallet',
          params: {
            money: parseFloat((this.walletmoney + this.sellTotal).toFixed(2))
          }
        };
        const savePromise = this.server.updateData(optionsWallet);
          savePromise.
            then((results) => {
              this.buySuccess = "Sold";
              this.boughtTotal = 0;
              this.portfolio.quantity = this.boughtQuantity = options.data.quantity;
              this.portfolio.total = this.boughtTotal = options.data.total;
              this.sellButtonDisabled = null;
              this.walletmoney = optionsWallet.params.money;
              this.buyResult = results == "ok" ? true : false;
              let timer = null;
               timer = setTimeout(() => {
              this.buyResult = false;
              }, 5000);
            })
      }).catch((err) => {
        throw err;
      });
    }else if(this.portfolio.quantity == quantity){
      let params = {
        ticker: this.ticker,
      };
      const options = {
        documentName: 'portfolio',
        params: params
      }
      const savePromise = this.server.deleteData(options);
        savePromise.
          then((results) => {
            this.buyResult = results == "ok" ? true : false;
            if (this.buyResult === true) {
              let optionsWallet = {
                documentName: 'wallet',
                params: {
                  money: parseFloat((this.walletmoney + this.sellTotal).toFixed(2))
                }
              };
              const savePromise = this.server.updateData(optionsWallet);
              savePromise.
                then((results) => {
                  this.buySuccess = "Sold";
                  this.boughtTotal = 0;
                  this.portfolio.quantity = this.boughtQuantity = 0;
                  this.portfolio.total = this.boughtTotal = 0;
                  this.sellButtonDisabled = null;
                  this.walletmoney = optionsWallet.params.money;
                  this.buyResult = results == "ok" ? true : false;
                })
            }
          })
          .catch((err) => {
            throw err;
        });
    }
  }

  // Navigation
  tabsChanges(event): void {
    this.tabs = event;
    switch (event) {
      case 'Summary':
        const Promise = this.server.finhubPeers({ key: this.hostList['ticker'] });
        Promise.then((resultFp) => {
          this.peers = resultFp;
          this.candlestickAndVolume();
        });
        break;
      case 'Top News':
        if (this.topNews.length > 1 || this.ticker?.length == 0) { break; }
        this.topNewsTab();
        break;
      case 'Charts':
        if (this.chartsData.length > 1) { break; }
        this.charts();
        break;
      case 'Insights':
        if (this.insightsData.length > 1) { break; }
        this.insights();
        break;
    }
  }

  searchClick(searchword: string): void {
    let searchwordone = searchword.split('|', 1);
    const reg = /\s+$/g;
    searchwordone[0] = searchwordone[0].replace(reg, '');
    this.router.navigate(['search', encodeURIComponent(searchwordone[0])]);
  }

  candlestickAndVolume(): void {
    let paramsSearch = {};
    let fromUnixTime = Number(new Date());
    if (this.marketServerTime == undefined) { return; }
    if (this.marketstatus == 'open') {
      this.tabFrom = fromUnixTime - 24 * 3600 * 1000;
      this.tabto = fromUnixTime;
    } else {
      this.tabFrom = this.marketServerTime - 24 * 3600 * 1000;
      this.tabto = this.marketServerTime;
    }
    paramsSearch = {
      ticker: this.ticker,
      day: 1,
      range: "hour",
      from: this.tabFrom,
      to: this.tabto
    };
    let data = [];
    const pPromise = this.server.polygonAggsTicker(paramsSearch);
    pPromise.then((result) => {
      if (typeof result.results == "object") {
        result.results.forEach(element => {
          data.push([element.t, element.c])
        });
        let seriesColor = this.polygonAggsPriceC >= 0 ? '#008000' : '#FF0000'; // Green if >= 0, red if < 0

        this.coption = {
          chart: {
            type: 'spline',
            reflow: true,
            height: 300,
            width: 350,
            backgroundColor: '#F5F5F5'
          },
          title: {
            text: this.ticker + ' Hourly Price Variation'
          },
          series: [{
            name: this.ticker + ' Hourly Price Variation',
            data: data,
            type: 'area',
            color: seriesColor,
            threshold: null,
            tooltip: {
              valueDecimals: 2
            },
            fillColor: 'rgba(0, 0, 0, 0)' 
          }],
          accessibility: { enabled: false },
          rangeSelector: {
            enabled: false
          },
          navigator: {
            enabled: false
          }
          
        };        
      }
    }).catch((err) => {
      throw err;
    });    
  }

  // Top News Tab
  topNewsTab(): void {
    let paramsSearch = {
      ticker: this.ticker,
      from: new Date(this.tabFrom).getFullYear() + '-' + String(new Date(this.tabFrom).getMonth() + 1).padStart(2, '0') + '-' + + String(new Date(this.tabFrom).getDate()).padStart(2, '0'),
      to: new Date(this.tabto).getFullYear() + '-' + String(new Date(this.tabto).getMonth() + 1).padStart(2, '0') + '-' + + String(new Date(this.tabto).getDate()).padStart(2, '0')
    };
    const pPromise = this.server.companyNews(paramsSearch);
    pPromise
      .then((result) => {
        this.topNews = result;
      })
      .catch((err) => {
        throw err;
      });
  }
  newsDetail(n): void {
    this.topNewsDetail = this.topNews[n];
    this.topNewsDetail.headlineencode = encodeURIComponent(this.topNewsDetail?.headline);
    this.topNewsDetail.urlencode = encodeURIComponent(this.topNewsDetail?.url);
  }

  // Chart Tab
  charts(): void {
    let paramsSearch = {
      ticker: this.ticker,
      day: 1,
      range: "day",
      from: (new Date(this.tabto).getFullYear() - 2) + '-' + String(new Date(this.tabto).getMonth() + 1).padStart(2, '0') + '-' + + String(new Date(this.tabto).getDate()).padStart(2, '0'),
      to: new Date(this.tabto).getFullYear() + '-' + String(new Date(this.tabto).getMonth() + 1).padStart(2, '0') + '-' + + String(new Date(this.tabto).getDate()).padStart(2, '0')
    };
    const pPromise = this.server.polygonAggsTicker(paramsSearch);
    pPromise
      .then((result) => {
        if (typeof result.results == "object") {
          let ohlc = result.results,
            volume = [],
            groupingUnits = [[
              'day',                       
              [1]                             
            ], [
              'day',
              [1, 2, 3, 4, 6]
            ]];
          for (let i = 0; i < ohlc.length; i += 1) {
            this.chartsData.push([
              ohlc[i]['t'],
              ohlc[i]['o'],
              ohlc[i]['h'],
              ohlc[i]['l'],
              ohlc[i]['c']
            ]);
            volume.push([
              ohlc[i]['t'],
              ohlc[i]['v']
            ]);
          }
          this.chartoption = {
            chart: {
              backgroundColor: '#F5F5F5'
            },
            rangeSelector: {
              selected: 2
            },
            title: {
              text: this.ticker + ' Historical'
            },
            subtitle: {
              text: 'With SMA and Volume by Price technical indicators'
            },
            yAxis: [{
              startOnTick: false,
              endOnTick: false,
              labels: {
                align: 'right',
                x: -3
              },
              title: {
                text: 'OHLC'
              },
              height: '60%',
              lineWidth: 2,
              resize: {
                enabled: true
              }
            }, {
              labels: {
                align: 'right',
                x: -3
              },
              title: {
                text: 'Volume'
              },
              top: '65%',
              height: '35%',
              offset: 0,
              lineWidth: 2
            }],
            tooltip: {
              split: true
            },
            plotOptions: {
              series: {
                dataGrouping: {
                  units: groupingUnits
                }
              },
              vbp: {
              }
            },
            series: [{
              type: 'candlestick',
              name: this.ticker,
              id: 'aapl',
              zIndex: 2,
              data: this.chartsData
            }, {
              type: 'column',
              name: 'Volume',
              id: 'volume',
              data: volume,
              yAxis: 1
            }, {
              type: 'vbp',
              linkedTo: 'aapl',
              params: {
                volumeSeriesID: 'volume'
              },
              dataLabels: {
                enabled: false
              },
              zoneLines: {
                enabled: false
              }
            }, {
              type: 'sma',
              linkedTo: this.ticker,
              zIndex: 1,
              marker: {
                enabled: false
              }
            }]
          }
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  // Insights Tab
  insights(): void {
    let paramsSearch = {
      ticker: this.ticker,
      from: "2022-01-01"
    };
    const pPromise = this.server.insider(paramsSearch);
    pPromise
      .then((result) => {
        if (result.data.length > 1) {
          this.insightsData = result.data;
          let msprP = 0;
          let msprN = 0;
          let changeP = 0;
          let changeN = 0;
          result?.data.forEach(element => {
            msprP += element.mspr >= 0 ? element.mspr : 0;
            msprN += element.mspr < 0 ? element.mspr : 0;
            changeP += element.change >= 0 ? element.change : 0;
            changeN += element.change < 0 ? element.change : 0;
          });
          let msprT = msprP + msprN;
          let changeT = changeP + changeN;
          this.msprPositive = msprP.toFixed(2);
          this.msprNagtive = msprN.toFixed(2);
          this.msprTotal = msprT.toFixed(2);
          this.changePositive = changeP;
          this.changeNagtive = changeN;
          this.changeTotal = changeT;
        }
      })
      .catch((err) => {
        throw err;
      });
    const rPromise = this.server.recommendation({ ticker: this.ticker });
    rPromise
      .then((result) => {
        if (result?.length > 0) {
          this.insightsoption = {
            chart: {
              type: 'column',
              backgroundColor: '#F5F5F5'
            },
            title: {
              text: 'Recommendation Trends',
              align: 'center',
              style: { fontWeight: 'bold' }
            },
            xAxis: {
              categories: [result[0].period, result[1].period, result[2].period, result[3].period]
            },
            yAxis: {
              min: 0,
              title: {
                text: '#Analysis',
                textAlign: 'left'
              },
              stackLabels: {
                enabled: true
              }
            },
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              shadow: false
            },
            tooltip: {
              headerFormat: '<b>{point.x}</b><br/>',
              pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
              column: {
                stacking: 'normal',
                dataLabels: {
                  enabled: true
                }
              }
            },
            series: [{
              name: 'Strong Buy',
              color: '#006633',
              data: [result[0].strongBuy, result[1].strongBuy, result[2].strongBuy, result[3].strongBuy]
            }, {
              name: 'Buy',
              color: '#339933',
              data: [result[0].buy, result[1].buy, result[2].buy, result[3].buy]
            }, {
              name: 'Hold',
              color: '#CC9933',
              data: [result[0].hold, result[1].hold, result[2].hold, result[3].hold]
            }, {
              name: 'Sell',
              color: '#CC3300',
              data: [result[0].sell, result[1].sell, result[2].sell, result[3].sell]
            }, {
              name: 'Strong Sell',
              color: '#660000',
              data: [result[0].strongSell, result[1].strongSell, result[2].strongSell, result[3].strongSell]
            }]
          };
        }
      })
      .catch((err) => {
        throw err;
      });
    const ePromise = this.server.earning({ ticker: this.ticker });
    ePromise
      .then((result) => {
        if (result?.length > 0) {
          result.forEach((element, index) => {
            result[index].actual = element.actual == null ? 0 : element.actual;
            result[index].estimate = element.estimate == null ? 0 : element.estimate;
            result[index].surprise = element.surprise == null ? 0 : element.surprise;
            result[index].surprisePercent = element.surprisePercent == null ? 0 : element.surprisePercent;
          });
          let a = [[result[0].surprise, result[0].actual],
          [result[1].surprise, result[1].actual],
          [result[2].surprise, result[2].actual],
          [result[3].surprise, result[3].actual]
          ];
          this.earningOption = {
            chart: {
              type: 'spline',
              backgroundColor: '#F5F5F5'
            },
            title: {
              text: 'Historical EPS Surprise',
              align: 'center'
            },
            xAxis: {
              categories: [result[0].period + "<br/>Surprise:" + result[0].surprise,
              result[1].period + "<br/>Surprise:" + result[1].surprise,
              result[2].period + "<br/>Surprise:" + result[2].surprise,
              result[3].period + "<br/>Surprise:" + result[3].surprise],
              reversed: false,
              title: {
                enabled: true,
              },
              labels: {
                format: '{value}'
              },
              accessibility: {
                rangeDescription: 'Range: 0 to 10'
              },
              maxPadding: 0.05,
              showLastLabel: true
            },
            yAxis: {
              title: {
                enabled: true,
                text: 'Quarterly EPS'
              },
              labels: {
                format: '{value}'
              },
              accessibility: {
                rangeDescription: 'Range: -90°C to 20°C.'
              },
              lineWidth: 2
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br/>',
              pointFormat: '{point.x}: {point.y}'
            },
            plotOptions: {
              spline: {
                marker: {
                  enable: false
                }
              }
            },
            series: [{
              name: 'Actual',
              data: [result[0].actual,
              result[1].actual,
              result[2].actual,
              result[3].actual
              ]
            }
              , {
              name: 'Estimate',
              data: [result[0].estimate,
              result[1].estimate,
              result[2].estimate,
              result[3].estimate
              ]
            }
            ]
          };
        }
      })
      .catch((err) => {
        throw err;
      });
  }
}