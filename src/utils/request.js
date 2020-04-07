import axios from 'axios'

const clearRequest = {
  source: {
    token: null,
    cancel: null
  }
}

const cancelToken = axios.CancelToken
const source = cancelToken.source()

// 创建 axios 实例
const service = axios.create({
  cancelToken: source.token,
  timeout: 12000,  // 请求超时时间
  headers: {
    'x-token': sessionStorage.getItem('token'),
    'x-uid': sessionStorage.getItem('uid'),
    'x-os': 'web',
    'x-vc': '1.0.0-SNAPSHOT'},
})

// request 拦截器
service.interceptors.request.use(config => {
    config.cancelToken = clearRequest.source.token
    return config
  }, error => {
    console.error('request.js = > interceptors > request > error = ' + error)
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  resp => {
    if (resp.status === 200) {
      return resp.data
    } else {
      console.table(resp)
      this.$message.error('HTTP CODE = ' + resp.status)
    }
  },
  error => {
    console.error('request.js = > interceptors > response > error = ' + error)
    return Promise.reject(error)
  }
)

export { clearRequest }
export default service
