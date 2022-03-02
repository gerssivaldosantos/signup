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

export const useUserRequest = {
  get (routeName: string, headers = {}) {
    return axios.get(`${baseUrl}/${routeName}`, { headers: getHeaders(headers) })
  }
}

export const useAuthRequest = {
  async post (routeName: string, params?: unknown, headers = {}): Promise<AxiosPromise> {
    const result = await axios.post(`${baseUrl}/${routeName}`, params, { headers: getHeaders(headers) })
    return result
  }
}
