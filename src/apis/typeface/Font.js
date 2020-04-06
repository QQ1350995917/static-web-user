import request from '@/utils/request'

export function listFont (title, index, size) {
  console.log('font index = ' + index)
  return request({
    url: '/typeface/api/user/font?title=' + title + '&index=' + index + '&size=' + size,
    method: 'get'
  })
}


