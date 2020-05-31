import request from '@/utils/request'

export function listMyPainting (content, fontId, index, size) {
  console.log('index = ' + index)
  return request({
    url: '/typeface/api/painting?content=' + content + '&fontId=' + fontId + '&index=' + index + '&size=' + size,
    method: 'get'
  })
}

export function paint (fontId, content) {
  return request({
    url: '/typeface/api/painting',
    method: 'post',
    data: {
      fontId, content
    }
  })
}