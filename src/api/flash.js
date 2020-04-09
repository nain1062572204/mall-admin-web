import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/flash/list',
    method:'GET',
    params:params
  })
}
export function updateStatus(id,params) {
  return request({
    url:'/flash/update/status/'+id,
    method:'PUT',
    params:params
  })
}
export function deleteFlash(id) {
  return request({
    url:'/flash/delete/'+id,
    method:'DELETE'
  })
}
export function createFlash(data) {
  return request({
    url:'/flash/create',
    method:'POST',
    data:data
  })
}
export function updateFlash(id,data) {
  return request({
    url:'/flash/update/'+id,
    method:'PUT',
    data:data
  })
}
