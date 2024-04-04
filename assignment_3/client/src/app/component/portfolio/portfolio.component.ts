import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewService } from 'src/app/service/new.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  objectKeys = Object.keys;
  buyList = [];
  walletmoney = -1;
  portfolio = [];
  portfolioKey = [];
  isLoading = true;
  buyTicker = '';
  buytotal;
  buyResult = false;
  buySuccess = 'Bought';
  successClass = 'alert-success';
  bsInput = 0;

  noPortfolio : boolean;
  currentPortfolio : any = {};
  boughtQuantity = 0;
  boughtTotal = 0;
  inputBuyQuantity = 0;
  sellTotal=0;
  sellButtonDisabled : boolean;

  constructor(private service: NewService) { }

  ngOnInit(): void {
    const options = {
      documentName: 'wallet',
      params: {}
    };
    const Promise = this.service.getData(options);
    Promise.then((result) => {
      if (result.length == 0) {
        const options = {
          documentName: 'wallet',
          params: {
            money: 25000,
          }
        }
        const savePromise = this.service.createDataI(options);
        savePromise.
          then((results) => {
            this.walletmoney = 25000;
          })
          .catch((err) => {
            throw err;
          });
      } else {
        this.walletmoney = parseFloat(result[0].money);
        this.updateportfolio();
      }
    }).catch((err) => {
      throw err;
    });
  }

  updateportfolio(): void {
    this.isLoading = true;
    this.portfolio = [];
    let optionsPf = {
      documentName: 'portfolio',
      params: {}
    }
    const PromisePf = this.service.getData(optionsPf);
    PromisePf.then((result) => {
      if (result?.length == 0) { 
        this.portfolio = result; 
        this.isLoading = false; 
        this.noPortfolio = true;
        return; 
      }
      
      this.buyList = result;
      let z = 0;
      result.forEach((v,i) => {
        this.portfolio[i]={
          _id:v._id,
          ticker: v.ticker,
          name: v.name,
          quantity: v.quantity,
          total: parseFloat(v.total.toFixed(2)),
          avg: parseFloat( (parseFloat(v.total.toFixed(2)) / parseFloat(v.quantity)).toFixed(2)) 
        };
        
        //finnhub quote
        const promiseQuote = this.service.finnhubQuote({ key: v.ticker });
        promiseQuote.then((resultq) => {
          this.portfolio[i].currentPrice = parseFloat(resultq.c.toFixed(2));
          this.portfolio[i].change = parseFloat((this.portfolio[i].avg - this.portfolio[i].currentPrice).toFixed(2));
          this.portfolio[i].marketValue = parseFloat((this.portfolio[i].currentPrice * this.portfolio[i].quantity).toFixed(2));

          if(this.portfolio[i].currentPrice > this.portfolio[i].avg){
            this.portfolio[i].class = 'text-success';
          }else if(this.portfolio[i].currentPrice == this.portfolio[i].avg){
            this.portfolio[i].class = 'text-dark';
          }else{
            this.portfolio[i].class = 'text-danger';
          }
          z += 1;
          this.isLoading = z === this.portfolio.length ? false : true;
        }).catch((err) => {
          throw err;
        });
      });
      }).catch((err) => {
      throw err;
    });
  }

  buyModal(i: number,quantity : string): void {
    this.inputBuyQuantity = parseInt(quantity);
    if(this.currentPortfolio.ticker !== this.portfolio[i].ticker && Object.keys(this.currentPortfolio).length > 0 ){
      this.buytotal = parseFloat((this.portfolio[i].currentPrice * this.inputBuyQuantity).toFixed(2));
      
      this.sellTotal = parseFloat((this.portfolio[i].currentPrice * this.inputBuyQuantity).toFixed(2));
      this.sellButtonDisabled = this.portfolio[i]?.quantity < this.inputBuyQuantity || this.sellTotal == 0 ? true : false;
    }

    this.currentPortfolio = this.portfolio[i];
    this.boughtTotal += this.portfolio[i].total;
    this.boughtQuantity += this.portfolio[i].quantity;
    this.buySuccess = "bought";
  }

  // calculate stock when purchase
  calculateBuyQuantity(quantity): void {
    quantity = parseInt(quantity);
    this.buytotal = parseFloat((this.currentPortfolio.currentPrice * parseFloat(quantity)).toFixed(2));
    this.buytotal = isNaN(this.buytotal) ? 0 :this.buytotal;
  }

  // calculate stock when sell
  calculateSellQuantity(quantity): void {
    this.sellTotal = parseFloat((this.currentPortfolio.currentPrice * parseFloat(quantity)).toFixed(2));
    this.sellTotal = isNaN(this.sellTotal) ? 0 :this.sellTotal;
    this.sellButtonDisabled = this.currentPortfolio?.quantity < parseFloat(quantity) || this.sellTotal == 0 ? true : false;
  }

  buy(quantity): void {
    quantity = parseInt(quantity);
    var options = {
      documentName: 'portfolio',
      data: { 
        quantity: quantity + this.currentPortfolio.quantity,
        pricevw: ((this.buytotal + this.currentPortfolio.total)/(quantity + this.currentPortfolio.quantity)).toFixed(2),
        total: parseFloat((this.buytotal + this.currentPortfolio.total).toFixed(2))
      },
      filter: { _id: this.currentPortfolio._id, },
    }
    const Promise = this.service.updateOne(options);
    Promise.then((results) => {
      this.boughtQuantity = options.data.quantity;
      this.boughtTotal = options.data.total;
      let optionsWallet = {
        documentName: 'wallet',
        params: {
          money: parseFloat((this.walletmoney - this.buytotal).toFixed(2))
        }
      };
      const savePromise = this.service.updateData(optionsWallet);
      savePromise.
        then((results) => {
          this.buySuccess = "Bought";
          this.buyResult = results == "ok" ? true : false;
          this.walletmoney = optionsWallet.params.money;
          this.updateportfolio();
          let timer = null;
          timer = setTimeout(() => {
            this.buyResult = false;
          }, 5000);        
        })
    }).catch((err) => {
      throw err;
    });
  }

  sell(quantity): void {
    quantity = parseInt(quantity);
    if(this.currentPortfolio.quantity > quantity){
      var options = {
        documentName: 'portfolio',
        data: { 
          quantity: this.currentPortfolio.quantity - quantity,
          total: parseFloat((this.currentPortfolio.total - this.sellTotal).toFixed(2))
        },
        filter: { _id: this.currentPortfolio._id, },
      }
      const Promise = this.service.updateOne(options);
      Promise.then((results) => {
        let optionsWallet = {
          documentName: 'wallet',
          params: {
            money: parseFloat((this.walletmoney + this.sellTotal).toFixed(2))
          }
        };
        const savePromise = this.service.updateData(optionsWallet);
          savePromise.
            then((results) => {
              this.buySuccess = "Sold";
              this.boughtTotal = 0;
              this.currentPortfolio.quantity = this.boughtQuantity = options.data.quantity;
              this.currentPortfolio.total = this.boughtTotal = options.data.total;
              this.sellButtonDisabled = null;
              this.walletmoney = optionsWallet.params.money;
              this.buyResult = results == "ok" ? true : false;
              this.updateportfolio();
              let timer = null;
              timer = setTimeout(() => {
                this.buyResult = false;
              }, 5000);
            })
      }).catch((err) => {
        throw err;
      });
    }else if(this.currentPortfolio.quantity == quantity){
      let params = {
        ticker: this.currentPortfolio.ticker,
      };
      const options = {
        documentName: 'portfolio',
        params: params
      }
      const savePromise = this.service.deleteData(options);
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
              const savePromise = this.service.updateData(optionsWallet);
              savePromise.
                then((results) => {
                  this.buySuccess = "Sold";
                  this.boughtTotal = 0;
                  this.currentPortfolio.quantity = this.boughtQuantity = 0;
                  this.currentPortfolio.total = this.boughtTotal = 0;
                  this.sellButtonDisabled = null;
                  this.walletmoney = optionsWallet.params.money;
                  this.buyResult = results == "ok" ? true : false;
                  this.updateportfolio();
                  let timer = null;
                  timer = setTimeout(() => {
                    this.buyResult = false;
                  }, 5000);
                })
            }
          })
          .catch((err) => {
            throw err;
        });
    }
  }
}