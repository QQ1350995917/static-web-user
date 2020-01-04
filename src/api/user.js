import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/ACCOUNT/api/admin/session',
    method: 'put',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/ACCOUNT/api/admin/session',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/ACCOUNT/api/admin/session',
    method: 'delete'
  })
}

