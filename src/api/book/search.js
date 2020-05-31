import request from '@/utils/request'

export function search (keyword, index, size) {
  return request({
    url: '/book/api/search?keyword=' + keyword + '&index=' + index + '&size=' + size,
    method: 'get'
  })
}