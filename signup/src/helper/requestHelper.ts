import axios, { AxiosPromise } from 'axios'

const baseUrl = 'http://localhost:8085'

const getHeaders = (headers = {}) => {
  if (localStorage.token) {
    const token = localStorage.getItem('token')
    return {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers
    }
  }
}
export const useRequest = {
  get (routeName:string, headers = {}) {
    return axios.get(`${baseUrl}/${routeName}`, { headers: getHeaders(headers) })
  },
  post (routeName:string, params?:unknown, headers = {}):AxiosPromise {
    return axios.post(`${baseUrl}/${routeName}`, params, { headers: getHeaders(headers) })
  }

}
