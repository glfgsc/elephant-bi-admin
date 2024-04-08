import request from '../utils/httpUtil'
const headers = { "X-Requested-With": "XMLHttpRequest" }
export function login(param:object){    
    return request('/login','post',param,headers)
}