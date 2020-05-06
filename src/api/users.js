import request from '@/utils/request'

const baseUrl = '/apiPro'

class Users {
  static list(params) {
    return request({
      url: `${baseUrl}/users/list`,
      method: 'get',
      params: params
    })
  }

  static info(data) {
    return request({
      url: `${baseUrl}/users/info/` + data,
      method: 'get'
    })
  }

  static save(data) {
    return request({
      url: `${baseUrl}/users/save`,
      method: 'post',
      data
    })
  }

  static update(data) {
    return request({
      url: `${baseUrl}/users/update`,
      method: 'put',
      data
    })
  }

  static delete(data) {
    return request({
      url: `${baseUrl}/users/delete/` + data,
      method: 'delete'
    })
  }
}

export default Users

