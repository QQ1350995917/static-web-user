import request from '@/utils/request'

export function listFont (title, index, size) {
  return request({
    url: '/typeface/api/font?title=' + title + '&index=' + index + '&size=' + size,
    method: 'get'
  })
}
