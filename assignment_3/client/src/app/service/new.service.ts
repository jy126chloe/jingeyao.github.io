import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  public protocol = environment.protocol;
  public hostname = environment.hostname;
  public baseUrl = `${this.protocol}://${this.hostname}`;

  constructor() {
    if (!environment.production && location.hostname === 'localhost') {
      this.baseUrl = `${this.baseUrl}:${environment.port}`;
    }
  }


  // get data
  async getData(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/getData';
    let promise;
    try {
      promise = await axios.get(httpUrl, { params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  // write data
  async createData(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/database/create';
    let promise;
    try {
      promise = await axios.post(httpUrl, options);
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  // create data i 
  async createDataI(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/database/initialWallet';
    let promise;
    try {
      promise = await axios.post(httpUrl, options);
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  // update data
  async updateData(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/database/update';
    let promise;
    try {
      promise = await axios.post(httpUrl, options);
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  // update one
  async updateOne(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/database/updateOne';
    let promise;
    try {
      promise = await axios.post(httpUrl, options);
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  // delete data 
  async deleteData(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/database/deleteData';
    let promise;
    try {
      promise = await axios.post(httpUrl, options);
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  // del watchlist
  async del(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/database/del';
    let promise;
    try {
      promise = await axios.post(httpUrl, options);
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  // delete many
  async delMany(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/database/delMany';
    let promise;
    try {
      promise = await axios.post(httpUrl, options);
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //get stock profile
  async searchStock(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/searchStock';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //finnhub peers
  async finhubPeers(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/finnhubpeers';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //get news
  async companyNews(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/companynews';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //finnhub stock quote
  async finnhubQuote(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/finnhubquote';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //polygon
  async polygonAggs(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/search/polygonaggs';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //polygon ticker
  async polygonAggsTicker(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/search/polygonaggsticker';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //market status
  async marketStatus(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/marketstatus';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //get insider
  async insider(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/search/insider';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //get recommendation
  async recommendation(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/search/recommendation';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }

  //get earning
  async earning(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/search/earning';
    let promise;
    try {
      promise = await axios.get(httpUrl,{ params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }
}