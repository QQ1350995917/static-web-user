/**
 * Created by pwd on 05/01/2017.
 */
import request from '@/utils/request'

export function signin(loginName,password){
  return request({
    url: '/account/api/session',
    method: 'put',
    data: {
      loginName,
      password
    }
  })
}

export function getSessionInfo(){
  return request({
    url: '/account/api/session',
    method: 'get'
  })
}

export function logout(){
  return request({
    url: '/account/api/session',
    method: 'delete'
  })
}
