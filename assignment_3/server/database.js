const dbConfig = {
  url: "mongodb+srv://jy126c:w8LejA0QO241jBi7@stocksearch.hzfx5xb.mongodb.net/?retryWrites=true&w=majority&appName=stocksearch",
  dbName: "stock_search",
};

const MC = require("mongodb").MongoClient;
const dbName = dbConfig.dbName;
const url = dbConfig.url + "/" + dbName;
const documentName = "api";

const dbOper = {
  createDB: async function (options) {
    let conn = null;
    const document_name = options.documentName || documentName;
    const time = Date.now();
    const data =
      {
        ...options.params,
        time: time,
        status: 1,
      } || {};
    try {
      conn = await MC.connect(url);
      const test = conn.db(dbName).collection(document_name);
      await test.insertOne(data);
    } catch (error) {
      console.log("error:" + error);
    } finally {
      if (conn != null) conn.close();
    }
  },

  updateDB: async function (options) {
    let conn = null;
    const document_name = options.documentName || documentName;
    const time = Date.now();
    const data =
      {
        ...options.params,
        time: time,
      } || {};
    const filter =
      {
        ip:options.params.ip,
        status: 1,
      } || {};
    try {
      conn = await MC.connect(url);
      const test = conn.db(dbName).collection(document_name);
      await test.updateOne(filter,{$set:data});
    } catch (error) {
      console.log("error:" + error);
    } finally {
      if (conn != null) conn.close();
    }
  },

  findDB: async function (params) {
    const skip = parseInt(params.skip);
    const limit = parseInt(params.limit);
    const sort = params.sort || { time: -1 };
    const document_name = params.documentName || documentName;
    let conn = null;
    try {
      conn = await MC.connect(url);
      const test = conn.db(dbName).collection(document_name);
      const paramsFind = JSON.parse(params.params.params);
      paramsFind.ip = params.params.ip;
      var arr = await test
        .find(paramsFind)
        .sort(sort)
        .limit(limit)
        .toArray();
      return arr;
    } catch (error) {
      console.log("error:" + error);
    } finally {
      if (conn != null) conn.close();
    }
  },

  deleteDB: async function (params) {
    let conn = null;
    const document_name = params.documentName || documentName;
    try {
      conn = await MC.connect(url);
      const test = conn.db(dbName).collection(document_name);
      const data =
      {
        ...params.params
      }
      const arr = await test.deleteMany(data);
      return arr;
    } catch (error) {
    } finally {
      if (conn != null) conn.close();
    }
  },

  del: async function (params) {
    let conn = null;
    const document_name = params.documentName || documentName;
    try {
      conn = await MC.connect(url);
      mongo = require('mongodb')
      const test = conn.db(dbName).collection(document_name);
      const arr = await test.deleteOne({ _id: new mongo.ObjectId(params.params._id) });
      return arr;
    } catch (error) {
      console.log("error:" + error);
    } finally {
      console.log("end");
      if (conn != null) conn.close();
    }
  },

  delMany: async function (params) {
    let conn = null;
    const document_name = params.documentName || documentName;
    try {
      conn = await MC.connect(url);
      mongo = require('mongodb')
      const test = conn.db(dbName).collection(document_name);
      let deleteMany_ids = []; 
      Object.keys(params.params).forEach(v => {
        deleteMany_ids.push(
          new mongo.ObjectId(params.params[v])
        );
      })
      const arr = await test.deleteMany({_id: { $in: deleteMany_ids}});
      return arr;
    } catch (error) {
      console.log("error:" + error);
    } finally {
      console.log("end");
      if (conn != null) conn.close();
    }
  },

  updateOne: async function (options) {
    let conn = null;
    const document_name = options.documentName || documentName;
    const time = Date.now();
    mongo = require('mongodb')
    const data ={
      ...options.data,
      time: time,
    } || {};
    const filter ={
      ...options.filter,
      status: 1,
    } || {};
    filter._id = new mongo.ObjectId(filter._id);
    try {
      conn = await MC.connect(url);
      const test = conn.db(dbName).collection(document_name);
      await test.updateOne(filter,{$set:data});
    } catch (error) {
      console.log("error:" + error);
    } finally {
      if (conn != null) conn.close();
    }
  },
};

module.exports = dbOper;