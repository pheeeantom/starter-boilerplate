import fetch from 'auth/FetchInterceptor'

const usersService = {}

usersService.getUsers = function (params) {
  return fetch({
    url: '/users',
    method: 'get',
    params,
    headers: {
        'public-request': 'true'
    },
  })
}

usersService.getUser = function (id, params) {
    return fetch({
      url: `/users/${id}`,
      method: 'get',
      params,
      headers: {
        'public-request': 'true'
      },
    })
  }

export default usersService