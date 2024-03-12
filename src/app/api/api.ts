import { ApiResponse, ApisauceInstance, create, PROBLEM_CODE } from 'apisauce'
import { AxiosError, AxiosRequestConfig } from 'axios';

import Config from './config';
import { ENDPOINTS } from './endpoints';


export interface ApiErrorReponse<T> {
  ok: false,
  problem: PROBLEM_CODE;
  originalError: AxiosError;

  headers?: {};
  config?: AxiosRequestConfig;
  duration?: number;
  status?: number;
  data?: T;
}
export interface ApiOkResponse<T> {
  ok: true;
  problem: null;
  originalError: null;

  headers?: {};
  config?: AxiosRequestConfig;
  duration?: number;
  status?: number;
  data?: T;
}
export type ApiResponseType<T> = ApiErrorReponse<T> | ApiOkResponse<T>

const apisauce = create({
  baseURL: Config.API_URL,
  timeout: 10000,
});

export class Api {
  apisauce: ApisauceInstance

  constructor() {
    this.apisauce = apisauce
  }
  
  async get<T>(params = {}): Promise<ApiResponseType<T>> {
    const response: ApiResponse<T> = await this.apisauce.get("", params);
    console.log('api get: '+params, response.status, response.data, response)
    return response
  }
  async post<T>(data = {}): Promise<ApiResponseType<T>> {
    const response: ApiResponse<T> = await this.apisauce.post("", data);
    console.log('api post: '+data, response.status, response.data, response)
    return response
  }
}

export const api = new Api()