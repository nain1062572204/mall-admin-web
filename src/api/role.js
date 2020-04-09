import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/role/list',
    method: 'GET',
    params: params
  })
}

export function createRole(data) {
  return request({
    url: '/role/create',
    method: 'POST',
    data: data
  })
}

export function updateRole(id, data) {
  return request({
    url: '/role/update/' + id,
    method: 'PUT',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/role/updateStatus/' + id,
    method: 'PUT',
    params: params
  })
}

export function deleteRole(data) {
  return request({
    url:'/role/delete',
    method:'DELETE',
    data:data
  })
}

export function fetchAllRoleList() {
  return request({
    url: '/role/listAll',
    method: 'GET'
  })
}

export function listMenuByRole(roleId) {
  return request({
    url: '/role/listMenu/'+roleId,
    method: 'GET'
  })
}

export function listResourceByRole(roleId) {
  return request({
    url: '/role/listResource/'+roleId,
    method: 'GET'
  })
}

export function allocMenu(data) {
  return request({
    url: '/role/allocMenu',
    method: 'POST',
    data:data
  })
}

export function allocResource(data) {
  return request({
    url: '/role/allocResource',
    method: 'POST',
    data:data
  })
}
