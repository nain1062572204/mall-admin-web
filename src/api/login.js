import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/admin/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/admin/info',
    method: 'GET',
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'POST'
  })
}

export function fetchList(params) {
  return request({
    url: '/admin/list',
    method: 'GET',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/admin/register',
    method: 'POST',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/admin/update/' + id,
    method: 'PUT',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/admin/updateStatus/' + id,
    method: 'PUT',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/admin/delete/' + id,
    method: 'DELETE'
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/admin/role/' + id,
    method: 'GET'
  })
}

export function allocRole(data) {
  return request({
    url: '/admin/role/update',
    method: 'PUT',
    data: data
  })
}
