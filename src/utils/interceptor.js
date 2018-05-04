/*
  request interceptor
  can globally override request params
 */

export function request (params) {
  return params
}

/*
  response interceptor
  can globally override response
 */
export function response (res) {
  if (res.statusCode === 200) {
    res = res.data
    if (!res.err_code) {
      return res
    } else {
      return Promise.reject(res)
    }
  } else {
    return Promise.reject(res)
  }
}
