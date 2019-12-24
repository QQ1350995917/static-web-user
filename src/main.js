// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/index.scss'
import 'font-awesome/scss/font-awesome.scss'
import { clearRequest } from '@/utils/request'
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'element-react';
import 'element-theme-default';

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.path === '/signin') {
    sessionStorage.removeItem('user')
  }
  var user = sessionStorage.getItem('user')
  if (!user && to.path !== '/signin') {
    next()
    // 登录打开验证
    // next({
    //   path: '/signin'
    // })
  } else {
    next()
  }
})

// ajax请求统一增加请求头
// axios.interceptors.request.use(config => {
//     let os = navigator.platform + "-" + navigator.userAgent.toLocaleLowerCase()
//     let token = localStorage.token
//     let uid = localStorage.uid
//     config.headers.common = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
//       'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//       'x-os': os,
//       'x-token': token,
//       'x-uid': uid,
//       'x-vc': '1.0.0',
//     }
//     config.timeout = 10000
//     let str_data = JSON.stringify(config.data || '{}')
//     // 参数中携带cancelHttp，不防止多次请求
//     if (str_data.indexOf('cancelHttp') > -1) {
//       httpFlag = false
//     } else {
//       removePending(config) //在一个ajax发送前执行一下取消操作
//       config.cancelToken = new cancelToken((c) => {
//         // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
//         pending.push({u: config.url + '&' + config.method, f: c})
//       })
//     }
//     return config
//   },
//   err => {
//     return null
//   })
//
// // 是否防止多次请求
// let httpFlag = true
// // 拦截响应response，并做一些错误处理
// axios.interceptors.response.use((response) => {
//   // const data = response.data;
//   // console.log(data);
//   if (httpFlag) {
//     removePending(response.config)  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
//   }
//   //return data;
//   return response
// }, (err) => {
//   // 这里是返回状态码不为200时候的错误处理
//   if (err.toString().indexOf('timeout') != -1) {
//     this.$message('请求超时，请稍后再试');
//   }
//   if (err && err.response) {
//     switch (err.response.status) {
//       case 400:
//         err.message = '请求错误'
//         break
//
//       case 401:
//         localStorage.XMDADMINTOKEN = ''
//         err.message = '未授权，请登录'
//         router.push({path: '/Login'})
//
//         break
//
//       case 403:
//         err.message = '拒绝访问'
//         break
//
//       case 404:
//         err.message = `请求地址出错: ${err.response.config.url}`
//         break
//       case 405:
//         err.message = `请求地址出错:`
//         break
//       case 408:
//         err.message = '请求超时'
//         break
//
//       case 500:
//         err.message = '网络错误，请稍后再试'
//         break
//
//       case 501:
//         err.message = '网络错误，请稍后再试'
//         break
//
//       case 502:
//         err.message = '网络错误，请稍后再试'
//         break
//
//       case 503:
//         err.message = '网络错误，请稍后再试'
//         break
//
//       case 504:
//         err.message = '网络错误，请稍后再试'
//         break
//
//       case 505:
//         err.message = 'HTTP版本不受支持'
//         break
//
//       default:
//     }
//     if (err.response.data.msg) {
//       err.message = err.response.data.msg
//     }
//     this.$message.error(err.message);
//   }
//   return Promise.reject(err)
// })
