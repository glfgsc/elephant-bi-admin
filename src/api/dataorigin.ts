import request from '../utils/httpUtil'
const headers = { "X-Requested-With": "XMLHttpRequest" }
export function getConnections(param:object){    
    return request('/dataorigin/select','post',param,headers)
}

export function getCharsets(){
    return request('/dataorigin/charset/select','post',{},headers)
}

export function getSchemas(param:object){
    return request('/dataorigin/schema','post',param,headers)
}

export function testConnection(param:object){
    return request('/dataorigin/test','post',param,headers)
}

export function insertDataOrigin(param:object){
    return request('/dataorigin/insert','post',param,headers)
}

export function checkConnectionName(param:object){
    return request('/dataorigin/checkName','get',param,headers)
}