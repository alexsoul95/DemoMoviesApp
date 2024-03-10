import { ApiResponse, ApisauceInstance, create } from 'apisauce'

import Config from './config';
import { ENDPOINTS } from './endpoints';

export type ApiData = {
  statusCode: string,
  message: string,
  content: any
}
export type ApiResponseType = Promise <{kind: 'ok', data: ApiData} | {kind: 'error', message: string, status: number | undefined}>

const apisauce = create({
  baseURL: Config.API_URL,
  headers: {
    'language' : `${useStore.getState().global.localization.current.slug}`,
    'Authorization' : `Bearer ${useStore.getState().profile.token}`
  },
  timeout: 10000,
});
// apisauce.axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = useStore.getState().profile.token;
//     const lang = useStore.getState().global.localization.current.slug;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     config.headers.language = lang ? lang : 'ru';
//     // config.headers['Content-Type'] = 'application/json';
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   },
// );
export class Api {
  apisauce: ApisauceInstance

  constructor() {
    this.apisauce = apisauce
  }
  
  async get(url: typeof ENDPOINTS[keyof typeof ENDPOINTS], params = {}): ApiResponseType {
    const response: ApiResponse<ApiData> = await this.apisauce.get(url, params);
    console.log('api get: '+url, params, response.status, response.data, response)
    if(!response.ok){
      return {kind: 'error', message: response.data?.message ?? "unexpected error", status: response.status }
    }
    try {
      
      return {kind: 'ok', data: response.data}
    } catch (error) {
      console.error(error, response.data?.message)
      return {kind: 'error', message: "Что-то пошло не так"}
    }
  }
  async post(url: typeof ENDPOINTS[keyof typeof ENDPOINTS], params = {}): ApiResponseType {
    const data = params;
    const response: ApiResponse<ApiData> = await this.apisauce.post(url, data);
    console.log('api post: '+url, params, response)
    if(!response.ok){
      return {kind: 'error', message: response.data?.message ?? "unexpected error", status: response.status }
    }
    try {
      
      return {kind: 'ok', data: response.data}
    } catch (error) {
      console.error(error, response.data?.message)
      return {kind: 'error', message: "Что-то пошло не так"}
    }
  }
  async delete(url: typeof ENDPOINTS[keyof typeof ENDPOINTS], params = {}): ApiResponseType {
    const data = params;
    const response: ApiResponse<ApiData> = await this.apisauce.delete(url, data);
    console.log('api delete: '+url, params, response.data)
    if(!response.ok){
      return {kind: 'error', message: response.data?.message ?? "unexpected error", status: response.status }
    }
    try {
      
      return {kind: 'ok', data: response.data}
    } catch (error) {
      console.error(error, response.data?.message)
      return {kind: 'error', message: "Что-то пошло не так"}
    }
  }
}

export const api = new Api()