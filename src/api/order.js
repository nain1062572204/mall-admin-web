import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/order/list',
    method:'GET',
    params:params
  })
}

export function closeOrder(params) {
  return request({
    url:'/order/update/close',
    method:'PUT',
    params:params
  })
}

export function deleteOrder(params) {
  return request({
    url:'/order/delete',
    method:'DELETE',
    params:params
  })
}

export function deliveryOrder(data) {
  return request({
    url:'/order/update/delivery',
    method:'PUT',
    data:data
  });
}

export function getOrderDetail(id) {
  return request({
    url:'/order/'+id,
    method:'GET'
  });
}

export function updateReceiverInfo(data) {
  return request({
    url:'/order/update/receiverInfo',
    method:'PUT',
    data:data
  });
}


export function updateOrderNote(params) {
  return request({
    url:'/order/update/note',
    method:'PUT',
    params:params
  })
}
