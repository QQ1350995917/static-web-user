import request from '@/utils/request'

export function books(){
  return request({
    url: '/book/api/user/book',
    method: 'get'
  })
}

export function bookDetail(bookId){
  return request({
    url: '/book/api/user/book/' + bookId,
    method: 'get'
  })
}

export function bookTable(bookId){
  console.log(bookId)
  return request({
    url: '/book/api/user/book/' + bookId + "/table",
    method: 'get'
  })
}

export function articleDetailInBook(bookId,articleId){
  return request({
    url: '/book/api/user/book/' + bookId + "/article/" + articleId,
    method: 'get'
  })
}
