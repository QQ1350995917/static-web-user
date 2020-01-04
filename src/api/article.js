import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}


export function fetchBooks(){
  console.log("api/article/fetchBooks")
  return request({
    url: '/ARTICLE/api/user/book',
    method: 'get'
  })
}

export function fetchBook(bookId){
  return request({
    url: '/ARTICLE/api/user/book/' + bookId,
    method: 'get'
  })
}

export function fetchArticleInBook(bookId,articleId){
  return request({
    url: '/ARTICLE/api/user/book/' + bookId + "/" + articleId,
    method: 'get'
  })
}

