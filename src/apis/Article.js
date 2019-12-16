import request from '@/utils/request'

export function books(){
  return request({
    url: '/article/api/user/book',
    method: 'get'
  })
}

export function bookDetail(bookId){
  return request({
    url: '/article/api/user/book/' + bookId,
    method: 'get'
  })
}

export function articleDetailInBook(bookId,articleId){
  return request({
    url: '/article/api/user/book/' + bookId + "/" + articleId,
    method: 'get'
  })
}
