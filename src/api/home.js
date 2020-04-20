import request from '@/utils/request'
export function content() {
  return request({
    url:'/home/content',
    method:'GET'
  })
}
