import request from '@/utils/request'

export function loginApi(data) {
  return request({
    url: '/account/api/session',
    method: 'put',
    data
  })
}

export function getInfoApi() {
  return request({
    url: '/account/api/session',
    method: 'get'
  })
}

export function logoutApi() {
  return request({
    url: '/account/api/session',
    method: 'delete'
  })
}

