/**
 * Created by pwd on 05/01/2017.
 */
import request from '@/utils/request'

export function signup(phoneNumber,smsCode,username){
  return request({
    url: '/account/api/account/phone',
    method: 'put',
    data: {
      phoneNumber,
      smsCode,
      username
    }
  })
}
