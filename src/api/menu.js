import request from '@/utils/request'

export function fetchList(parentId, params) {
  return request({
    url: '/menu/list/' + parentId,
    method: 'GET',
    params: params
  })
}

export function deleteMenu(id) {
  return request({
    url: '/menu/delete/' + id,
    method: 'DELETE'
  })
}

export function createMenu(data) {
  return request({
    url: '/menu/create',
    method: 'POST',
    data: data
  })
}

export function updateMenu(id, data) {
  return request({
    url: '/menu/update/' + id,
    method: 'PUT',
    data: data
  })
}

export function getMenu(id) {
  return request({
    url: '/menu/' + id,
    method: 'GET',
  })
}

export function updateHidden(id, params) {
  return request({
    url: '/menu/updateHidden/' + id,
    method: 'PUT',
    params: params
  })
}

export function fetchTreeList() {
  return request({
    url: '/menu/treeList',
    method: 'GET'
  })
}

