import axios from 'axios'

const http = axios.create({
    baseURL: 'http://mall.shopifymall.cn/routine/',
    timeout: 5000
})

http.interceptors.response.use((response)=>{
    return response.data
}, (error)=>{
    return Promise.reject(error)
})

export default http