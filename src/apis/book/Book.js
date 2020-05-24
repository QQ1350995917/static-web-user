import request from '@/utils/request'

export function books (index, size) {
  return request({
    url: '/book/api/user/book?index=' + index + '&size=' + size,
    method: 'get'
  })
}

export function bookSummary (bookId) {
  return request({
    url: '/book/api/user/book/' + bookId,
    method: 'get'
  })
}

export function bookTable (bookId, pageIndex, pageSize) {
  console.log(bookId)
  return request({
    url: '/book/api/user/book/' + bookId + '/' + pageIndex + '/' + pageSize,
    method: 'get'
  })
}


