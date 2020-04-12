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
      console.log('网络正常，业务出错，日志如下')
      console.table(resp)
    }
  }, error => {
    if (error.response.status === 400) {
      console.warn("400" );
    } else if (error.response.status === 401) {
      console.warn("401" );
      location.href = '/#/signin'
    } else if (error.response.status === 402) {
      console.warn("response 402" );
    }  else if (error.response.status === 403) {
      console.warn("response 403");
    } else if (error.response.status === 404) {
      console.warn("response 404" );
      // router.push({
      //   name: 'error-404'
      // });
    }
    console.log("响应拦截器，错误信息：")
    console.table(error.response.data)
    return Promise.reject(error.response.data)
  }
)

export { clearRequest }

export default service
