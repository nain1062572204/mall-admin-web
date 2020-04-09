import request from '@/utils/request'
export function fetchList(cid,params) {
  return request({
    url:'/productAttribute/list/'+cid,
    method:'GET',
    params:params
  })
}

export function deleteProductAttr(data) {
  return request({
    url:'/productAttribute/delete',
    method:'DELETE',
    data:data
  })
}

export function createProductAttr(data) {
  return request({
    url:'/productAttribute/create',
    method:'POST',
    data:data
  })
}

export function updateProductAttr(id,data) {
  return request({
    url:'/productAttribute/update/'+id,
    method:'PUT',
    data:data
  })
}
export function getProductAttr(id) {
  return request({
    url:'/productAttribute/'+id,
    method:'GET'
  })
}

export function getProductAttrInfo(productCategoryId) {
  return request({
    url:'/productAttribute/attrInfo/'+productCategoryId,
    method:'GET'
  })
}
