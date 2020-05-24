import request from '@/utils/request'

export function search (keyword, index, size) {
  return request({
    url: '/book/api/user/search?keyword=' + keyword + '&index=' + index + '&size=' + size,
    method: 'get'
  })
}
