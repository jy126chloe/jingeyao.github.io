import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  private baseUrl: string;

  constructor() {
    const portSuffix = environment.port ? `:${environment.port}` : '';
    this.baseUrl = `${environment.protocol}://${environment.hostname}${portSuffix}`;
  }

  async autoComplate(options): Promise<any> {
    const httpUrl = this.baseUrl + '/api/index/autocom';
    let promise;
    try {
      promise = await axios.get(httpUrl, { params: options });
    } catch (error) {
      throw error;
    }
    return promise.data;
  }
}