import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/advertise/list',
    method:'GET',
    params:params
  })
}
export function updateStatus(id,params) {
  return request({
    url:'/advertise/update/status/'+id,
    method:'PUT',
    params:params
  })
}
export function deleteHomeAdvertise(data) {
  return request({
    url:'/advertise/delete',
    method:'DELETE',
    data:data
  })
}
export function createHomeAdvertise(data) {
  return request({
    url:'/advertise/create',
    method:'POST',
    data:data
  })
}
export function getHomeAdvertise(id) {
  return request({
    url:'/advertise/'+id,
    method:'GET',
  })
}

export function updateHomeAdvertise(id,data) {
  return request({
    url:'/advertise/update/'+id,
    method:'PUT',
    data:data
  })
}
