import request from '@/utils/request'

export function articleDetail(articleId) {
  return request({
    url: '/book/api/user/article/' + articleId,
    method: 'get'
  })
}

