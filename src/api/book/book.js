import request from '@/utils/request'


export function requestBooksApi (index, size) {
  return request({
    url: '/book/api/book?index=' + index + '&size=' + size,
    method: 'get'
  })
}

export function bookSummary (bookId) {
  return request({
    url: '/book/api/book/' + bookId,
    method: 'get'
  })
}

export function bookTable (bookId, pageIndex, pageSize) {
  console.log(bookId)
  return request({
    url: '/book/api/book/' + bookId + '/' + pageIndex + '/' + pageSize,
    method: 'get'
  })
}