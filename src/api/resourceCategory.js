import request from '@/utils/request'

export function listAllCate() {
  return request({
    url: '/resourceCategory/listAll',
    method: 'GET'
  })
}

export function createResourceCategory(data) {
  return request({
    url: '/resourceCategory/create',
    method: 'POST',
    data: data
  })
}

export function updateResourceCategory(id, data) {
  return request({
    url: '/resourceCategory/update/' + id,
    method: 'PUT',
    data: data
  })
}

export function deleteResourceCategory(id) {
  return request({
    url: '/resourceCategory/delete/' + id,
    method: 'DELETE'
  })
}
