const exp = require("express");
const axi = require("axios");
const app = exp();
const path = require('path');

const port = process.env.PORT || 8080;
const dbHandle = require("./database");
const finnhubkey = 'cn22qn9r01qmg1p4df9gcn22qn9r01qmg1p4dfa0';

app.use(exp.static(path.join(__dirname, 'public/dist')));

app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  next();
});

const query = {
  headers: {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
  },
};
app.get("/", (req, res) => {
  res.send("...");
});

// get data
app.get("/api/getData", async (req, res) => {
  const params = req.query;
  const documentName = req.query.documentName;
  const query = {
    documentName: documentName,
    params: { ...params, ip: req.ip },
  };
  const p = dbHandle.findDB(query);
  p.then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

// write
app.post("/api/database/create", async (req, res) => {
  const params = req.body;
  resultReturn = [];
  const documentName = params.documentName;
  const query = {
    documentName: documentName,
    params: { ...params.params, ip: req.ip },
  };
  dbHandle.createDB(query);
  res.send("ok");
});

// initial wallet
app.post("/api/database/initialWallet", async (req, res) => {
  const params = req.body;
  resultReturn = [];
  const documentName = params.documentName;
  const query = {
    documentName: documentName,
    params: { ...params.params, ip: req.ip },
  };
  dbHandle.createDB(query);
  res.send("ok");
});

// update 
app.post("/api/database/update", async (req, res) => {
  const params = req.body;
  resultReturn = [];
  const documentName = params.documentName;
  const query = {
    documentName: documentName,
    params: { ...params.params, ip: req.ip },
  };
  dbHandle.updateDB(query);
  res.send("ok");
});

// update one
app.post("/api/database/updateOne", async (req, res) => {
  const params = req.body;
  resultReturn = [];
  const documentName = params.documentName;
  const query = {
    documentName: documentName,
    data: params.data,
    filter: params.filter
  };
  dbHandle.updateOne(query);
  res.send("ok");
});

// delete data
app.post("/api/database/deleteData", async (req, res) => {
  const params = req.body;
  resultReturn = [];
  const documentName = params.documentName;
  const query = {
    documentName: documentName,
    params: { ...params.params, ip: req.ip},
  };
  dbHandle.deleteDB(query);
  res.send("ok");
});

// delete 
app.post("/api/database/del", async (req, res) => {
  const params = req.body;
  resultReturn = [];
  const documentName = params.documentName;
  const query = {
    documentName: documentName,
    params: { ...params.params, ip: req.ip },
  };
  dbHandle.del(query);
  res.send("ok");
});

// delete many
app.post("/api/database/delMany", async (req, res) => {
  const params = req.body;
  resultReturn = [];
  const documentName = params.documentName;
  const query = {
    documentName: documentName,
    params: {
      ...params.params
    },
  };
  dbHandle.delMany(query);
  res.send("ok");
});

// get company profile finnhub
app.get("/api/index/searchStock", (req, res) => {
  const params = req.query;
  const apiUrl = "https://finnhub.io/api/v1/stock/profile2?symbol=" + params.key + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// get stock price finnhub 
app.get("/api/index/finnhubquote", (req, res) => {
  const params = req.query;
  const apiUrl = "https://finnhub.io/api/v1/quote?symbol=" + params.key + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//get company peers finnhub
app.get("/api/index/finnhubpeers", (req, res) => {
  const params = req.query;
  const apiUrl = "https://finnhub.io/api/v1/stock/peers?symbol=" + params.key + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
      size: 15,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/api/index/search/polygonaggs", (req, res) => {
  const params = req.query;
  var timestamp = Date.parse(new Date())
  const dt = new Date(timestamp -3600 * 24 * 4 * 1000);
  const dts = new Date(timestamp);
  const year = dt.getFullYear()
  const month = dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1
  const date = dt.getDate() < 10 ? "0" + (dt.getDate()) : (dt.getDate())

  const yeardt = dts.getFullYear()
  const monthdt = dts.getMonth() + 1 < 10 ? "0" + (dts.getMonth() + 1) : dts.getMonth() + 1
  let nextDate = dts.getDate() < 10 ? "0" + (dts.getDate()) : (dts.getDate())


  const apiUrl = "https://api.polygon.io/v2/aggs/ticker/" + params.key.toUpperCase()
    + "/range/4/day/" + year + "-" + month + "-" + date + "/" + yeardt + "-" + monthdt + "-" + nextDate + "?adjusted=true&sort=asc&limit=1&apiKey=q_HZt6VdQSKUSisdL5dcYOOSd4oDy9du";
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// get summary charts
app.get("/api/index/search/polygonaggsticker", (req, res) => {
  const params = req.query;
  const apiUrl = "https://api.polygon.io/v2/aggs/ticker/" + params.ticker
    + "/range/" + params.day + "/" + params.range + "/" + params.from + "/" + params.to + "?adjusted=true&sort=asc&apiKey=q_HZt6VdQSKUSisdL5dcYOOSd4oDy9du";

  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// get market status polygon
app.get("/api/index/marketstatus", (req, res) => {
  const apiUrl = "https://api.polygon.io/v1/marketstatus/now?apiKey=q_HZt6VdQSKUSisdL5dcYOOSd4oDy9du";
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
      size: 15,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});


// finnhub 
app.get("/api/index/autocom", (req, res) => {
  const params = req.query;
  const apiUrl = "https://finnhub.io/api/v1/search?q=" + params.key + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
      size: 100,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// finnhub autocompelete
app.get("/api/index/autocom", (req, res) => {
  const params = req.query;
  const apiUrl = "https://finnhub.io/api/v1/search?q=" + params.key + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
      size: 100,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// finnhub news
app.get("/api/index/companynews", (req, res) => {
  const params = req.query;
  const apiUrl = "https://finnhub.io/api/v1/company-news?symbol=" + params.ticker + '&from=' + params.from + '&to=' + params.to + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// get insider-sentiment polygon 
// https://finnhub.io/api/v1/stock/insider-sentiment?symbol=<TICKER>&from=2022-01-01&token=<API_KEY></API_KEY>
app.get("/api/index/search/insider", (req, res) => {
  const params = req.query;
  const apiUrl = " https://finnhub.io/api/v1/stock/insider-sentiment?symbol=" + params.ticker + "&from=" + params.from + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
      size: 15,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

//get recommendation 
// https://finnhub.io/api/v1/stock/recommendation?symbol=<TICKER>&token=<API_KEY>
app.get("/api/index/search/recommendation", (req, res) => {
  const params = req.query;
  const apiUrl = " https://finnhub.io/api/v1/stock/recommendation?symbol=" + params.ticker + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// get company earning 
// https://finnhub.io/api/v1/stock/earnings?symbol=MSFT&token=<API_KEY>
app.get("/api/index/search/earning", (req, res) => {
  const params = req.query;
  const apiUrl = " https://finnhub.io/api/v1/stock/earnings?symbol=" + params.ticker + "&token=" + finnhubkey;
  const p = axi.get(apiUrl, {
    ...query,
    params: {
      since_id: -1,
      max_id: -1,
      size: 15,
    },
  });
  p
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});