import request from '@/utils/request'
export function fetchList(parentId,params) {
  return request({
    url:'/productCategory/list/'+parentId,
    method:'GET',
    params:params
  })
}
export function deleteProductCate(id) {
  return request({
    url:'/productCategory/delete/'+id,
    method:'DELETE'
  })
}

export function createProductCate(data) {
  return request({
    url:'/productCategory/create',
    method:'POST',
    data:data
  })
}

export function updateProductCate(id,data) {
  return request({
    url:'/productCategory/update/'+id,
    method:'PUT',
    data:data
  })
}

export function getProductCate(id) {
  return request({
    url:'/productCategory/'+id,
    method:'GET',
  })
}

export function updateShowStatus(data) {
  return request({
    url:'/productCategory/update/showStatus',
    method:'PUT',
    data:data
  })
}

export function updateNavStatus(data) {
  return request({
    url:'/productCategory/update/navStatus',
    method:'PUT',
    data:data
  })
}
export function updateRecommandStatus(data) {
  return request({
    url:'/productCategory/update/recommandStatus',
    method:'PUT',
    data:data
  })

}

export function fetchListWithChildren() {
  return request({
    url:'/productCategory/list/withChildren',
    method:'GET'
  })
}
