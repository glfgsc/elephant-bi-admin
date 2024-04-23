import request from '../utils/httpUtil'
const headers = { "X-Requested-With": "XMLHttpRequest" }

export function getWorkbooks(param:Object){
    return request('/workbook/select','get',param,headers)
}

export function insertWorkbook(param:object){
    return request('/workbook/insert','post',param,headers)
}

export function updateWorkbook(param:object){
    return request('/workbook/update','post',param,headers)
}

export default{getWorkbooks,insertWorkbook,updateWorkbook}