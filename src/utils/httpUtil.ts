import axios from 'axios'

const httpUtil = axios.create({
    baseURL: '/api',
    timeout:60000,
})

//request拦截器
httpUtil.interceptors.request.use(config => {
    return config 
},error => {
    Promise.reject(error)
});

//response拦截器
httpUtil.interceptors.response.use(response => {
    let res = response.data 
    if(response.config.responseType === 'blob'){
        return res
    }

    if(typeof res === 'string'){
        res = res?JSON.parse(res):res
    }
    return res;
},error => {
    console.log('err'+error)
    return Promise.reject(error)
});

const request = function (url:string,method:string,param:object,headers:any) {
    if(method=='post'){
        return httpUtil({
            headers: headers,
            url: url,
            method: 'post',
            data: param
        })
    }else{
        return httpUtil(
            {
                url: url,
                method: 'get',
                params: param
            }
        )
    }
    
}

export default request
