document.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM fully loaded and parsed");

  document.querySelector('.search-box').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.value.trim() === '') {
        alert('Please fill out this field.');
      } else {
        searchStock();
      }
    }
  });

  document.querySelector('.search-icon').addEventListener('click', function () {
    var input = document.querySelector('.search-box');
    if (input.value.trim() === '') {
      alert('Please fill out this field.');
    } else {
      searchStock();
    }
  });

  document.querySelector('.clear-icon-container').addEventListener('click', function () {
    var input = document.getElementById('searchInput');
    input.value = '';

    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.style.display = 'none';
    });

    document.getElementById('tabs').style.display = 'none';
  });

  
  document.getElementById('searchInput').addEventListener('input', function() {
    if(this.value.trim() !== '') {
    }
  });
});

function searchStock() {
  var tickerSymbol = document.querySelector('.search-box').value.toUpperCase();
  if (!tickerSymbol) {
    alert('Please fill out this field.');
    return;
  }

  document.querySelector('#tabs').style.display = 'none'; 
  document.querySelector('#chart').style.display = 'none';
  
  fetch(`/search?query=${tickerSymbol}`)
    .then(response => response.json())
    .then(data => {
      if (!data || Object.keys(data).length === 0) {
        throw new Error('Failed to fetch company data');
      }

      const logoImg = document.getElementById('companyLogo');
      if (data.logo) {
        logoImg.src = data.logo;
        logoImg.style.display = 'block';
      } else {
        logoImg.style.display = 'none';
      }

      document.getElementById('companyName').textContent = data.name || 'N/A';
      document.getElementById('stockSymbol').textContent = data.ticker || 'N/A';
      document.getElementById('exchangeCode').textContent = data.exchange || 'N/A';
      document.getElementById('startDate').textContent = data.ipo || 'N/A';
      document.getElementById('category').textContent = data.finnhubIndustry || 'N/A';
      
      document.querySelector('#tabs').style.display = 'block';
      openTab('company');

      return fetch(`/quote?ticker=${tickerSymbol}`);
    })
    .then(response => response.json())
    .then(quoteData => {
      if (!quoteData || Object.keys(quoteData).length === 0) {
        throw new Error('Failed to fetch quote data');
      }

      const date = new Date(quoteData.t * 1000);
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      const year = date.getFullYear();

      const tradingDay = `${day} ${month}, ${year}`;
      document.getElementById('tickerSymbol').textContent = tickerSymbol.toUpperCase();
      document.getElementById('tradingDay').textContent = tradingDay || 'N/A';
      document.getElementById('closingPrice').textContent = quoteData.pc || 'N/A';
      document.getElementById('openingPrice').textContent = quoteData.o || 'N/A';
      document.getElementById('highPrice').textContent = quoteData.h || 'N/A';
      document.getElementById('lowPrice').textContent = quoteData.l || 'N/A';
      
      const changeValue = quoteData.d || 0;
      document.getElementById('change').textContent = changeValue.toFixed(2);
      document.getElementById('changeImg').src = changeValue < 0 ? '/static/img/RedArrowDown.png' : (changeValue > 0 ? '/static/img/GreenArrowUp.png' : '');
      
      const changePercentValue = quoteData.dp || 0;
      const changePercentText = `${changePercentValue.toFixed(2)}%`;
      document.getElementById('changePercent').textContent = changePercentText;
      document.getElementById('changePercentImg').src = changePercentValue < 0 ? '/static/img/RedArrowDown.png' : (changePercentValue > 0 ? '/static/img/GreenArrowUp.png' : '');
      
      
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.message);
    });
    // Fetch Recommendation Trends
    fetchRecommendationTrends(tickerSymbol);
    // Fetch Chart Data
    fetchChart(tickerSymbol);
    // Fetch News Data
    fetchNews(tickerSymbol);
}

function fetchRecommendationTrends(tickerSymbol) {
  fetch(`/recommendation?symbol=${tickerSymbol}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('strongSell').textContent = data.strongSell ?? 'N/A';
      document.getElementById('sell').textContent = data.sell ?? 'N/A';
      document.getElementById('hold').textContent = data.hold ?? 'N/A';
      document.getElementById('buy').textContent = data.buy ?? 'N/A';
      document.getElementById('strongBuy').textContent = data.strongBuy ?? 'N/A';
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function fetchNews(symbol) {
  fetch(`/company_news?symbol=${symbol}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const validNews = data.filter(item => item.image && item.url && item.headline && item.datetime).slice(0, 5);
      console.log(validNews)
      console.log(1111)
      updateNewsUI(validNews);
      console.log(222)
      console.log(333)
    })
    .catch(error => console.error('Error fetching news:', error));
}

function updateNewsUI(newsItems) {
  console.log(444)
  console.log(newsItems)
  const newsContainer = document.querySelector('.news-container');
  newsContainer.innerHTML = '';
  console.log(555)
  newsItems.forEach(news => {
    const date = new Date(news.datetime * 1000);
    const day = date.getDate(); // 获取日期
    const month = date.toLocaleString('default', { month: 'long' }); 
    const year = date.getFullYear(); // 获取年份
    const formattedDate = `${day} ${month}, ${year}`;

    const newsElement = document.createElement('div');
    newsElement.className = 'news';
    console.log(666)
    newsElement.innerHTML = `
      <div class="news-image"><img src="${news.image}" alt="News Image"></div>
      <div class="news-content">
        <div class="news-title">${news.headline}</div>
        <div class="news-date">${formattedDate}</div>
        <a href="${news.url}" target="_blank" rel="noopener noreferrer" class="news-link" style="text-decoration: underline;">See Original Post</a>
      </div>
    `;

    newsContainer.appendChild(newsElement);
  });
  console.log(777)
}

function openTab(tabId) {
  var tabContent = document.getElementById(tabId);
  if (tabContent) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.style.display = 'none';
    });
    tabContent.style.display = 'block';
  } else {
    console.error('cannot find the element of ID', tabId);
  }
  if (tabId === 'charts') {
    console.log(211)
    renderChart();
  }
}

var PriceData = []
var VolumeData = []
function fetchChart(symbol) {
  fetch(`/stock_chart?stockTicker=${symbol}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      PriceData = data?.results?.map(v=>[v.t,v.o]) 
      VolumeData = data?.results?.map(v=>[v.t,v.v]) 
    })
    .catch(error => console.error('Error fetching news:', error));
}
function getCurrentDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = (today.getMonth() + 1).toString().padStart(2, '0'); 
  var day = today.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
}

function renderChart() {
  document.querySelector('#chart').style.display = 'block';
    console.log(PriceData)
    var tickerSymbol = document.querySelector('.search-box').value;
    var currentDate = getCurrentDate();
    const MaxVolume = Math.max(...VolumeData.map(v => v[1]));
    
    Highcharts.stockChart('chart', {
      title: {
          text: `Stock Price ${tickerSymbol} ${currentDate}`
      },
      subtitle: {
        text:'<a href="https://polygon.io/" target="_blank" style="color: blue; text-decoration: underline;">Source: Polygon.io</a>'
      },
      
      xAxis: {
          type: 'datetime',
          labels: {
              formatter: function () {
                  return Highcharts.dateFormat('%Y-%m-%d', this.value);
              }
          },
      },
      
      yAxis: [{
          title: {
              text: 'Stock Price '
          },
          opposite: false,
      }, {
          title: {
              text: 'Volume'
          },
          max: MaxVolume * 2,
      }],
      series: [{
          name: 'Stock Price',
          type: 'area',
          data: PriceData,
          yAxis: 0,
          threshold: null,
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]], 
              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')] 
            ]
          },
      }, {
          name: 'Volume',
          type: 'column', 
          data: VolumeData,
          yAxis: 1,
          color: 'black',
          pointWidth: 5, 
          pointRange: 0,
      }],
      scrollbar: {
          enabled: true
      },
      rangeSelector: {
        buttons: [{
            type: 'day',
            count: 7,
            text: '7d'
        }, {
            type: 'day',
            count: 15,
            text: '15d'
        }, {
            type: 'month',
            count: 1,
            text: '1m'
        }, {
            type: 'month',
            count: 3,
            text: '3m'
        }, {
            type: 'month',
            count: 6,
            text: '6m'
        }],
        selected: 0,
        inputEnabled: false
      },
      exporting: {
        enabled: true
    }
  });
}
