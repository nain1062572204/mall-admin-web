import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/flashProductRelation/list',
    method:'GET',
    params:params
  })
}
export function createFlashProductRelation(data) {
  return request({
    url:'/flashProductRelation/create',
    method:'POST',
    data:data
  })
}
export function deleteFlashProductRelation(id) {
  return request({
    url:'/flashProductRelation/delete/'+id,
    method:'DELETE'
  })
}
export function updateFlashProductRelation(id,data) {
  return request({
    url:'/flashProductRelation/update/'+id,
    method:'PUT',
    data:data
  })
}
