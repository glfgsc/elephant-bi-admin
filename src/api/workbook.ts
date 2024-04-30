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

<<<<<<< HEAD
export default{getWorkbooks,insertWorkbook,updateWorkbook}
=======
export function checkName(param:object){
    return request('workbook/checkName','get',param,headers)
}

export default{getWorkbooks,insertWorkbook,updateWorkbook,checkName}
>>>>>>> 7b51a8c (Update)
