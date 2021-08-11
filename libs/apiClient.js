import axios from "axios"
import cookie from 'js-cookie'

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

apiClient.setToken = function (token){
    this.token = token
}

apiClient.interceptors.request.use(function (config){
    const token = apiClient.token || cookie.get('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},error => Promise.reject(error))

export default apiClient