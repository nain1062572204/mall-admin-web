import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/resource/list',
    method: 'GET',
    params: params
  })
}

export function createResource(data) {
  return request({
    url: '/resource/create',
    method: 'POST',
    data: data
  })
}

export function updateResource(id, data) {
  return request({
    url: '/resource/update/' + id,
    method: 'PUT',
    data: data
  })
}

export function deleteResource(id) {
  return request({
    url: '/resource/delete/' + id,
    method: 'DELETE'
  })
}

export function fetchAllResourceList() {
  return request({
    url: '/resource/listAll',
    method: 'GET'
  })
}
