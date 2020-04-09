import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/productAttribute/category/list',
    method:'GET',
    params:params
  })
}

export function createProductAttrCate(data) {
  return request({
    url:'/productAttribute/category/create',
    method:'POST',
    data:data
  })
}

export function deleteProductAttrCate(id) {
  return request({
    url:'/productAttribute/category/delete/'+id,
    method:'DELETE'
  })
}

export function updateProductAttrCate(id,data) {
  return request({
    url:'/productAttribute/category/update/'+id,
    method:'PUT',
    data:data
  })
}
export function fetchListWithAttr() {
  return request({
    url:'/productAttribute/category/list/withAttr',
    method:'GET'
  })
}
