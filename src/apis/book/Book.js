import request from '@/utils/request'

export function books () {
  return request({
    url: '/book/api/user/book',
    method: 'get'
  })
}

export function bookSummary (bookId) {
  return request({
    url: '/book/api/user/book/' + bookId,
    method: 'get'
  })
}

export function bookTable (bookId) {
  console.log(bookId)
  return request({
    url: '/book/api/user/book/' + bookId + '/table',
    method: 'get'
  })
}

export function articleDetailInBook (bookId, articleId) {
  return request({
    url: '/book/api/user/book/article/' + articleId,
    method: 'get'
  })
}

export function search (keyword, index, size) {
  return request({
    url: '/book/api/user/book/search?keyword=' + keyword + '&index=' + index + '&size=' + size,
    method: 'get'
  })
}
