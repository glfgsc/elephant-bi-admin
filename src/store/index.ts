import { defineStore } from 'pinia'
import {ref} from 'vue'
import {login} from '../api/login.ts'
import {getConnections} from '../api/dataorigin.ts'
import {ElMessage} from 'element-plus'
export const useLoginStore =  defineStore('login',()=>{
    const user  = ref({})
    async function asyncLogin(param:object){
        try{
            const res = await login(param)
            if(res.message === 'ok'){
                user.value = param
            }
        }catch(err){
            ElMessage({
                type: 'error',
                message: err
            })
        }
        
    }

    return {user,asyncLogin}
})

export const useIndexStore = defineStore('index',()=>{
    const mainContent = ref('DataOrigin')

    function changeMainContent(param:string){
        mainContent.value = param
    }
    return {mainContent,changeMainContent}
})

export const useDataoriginStore = defineStore('dataorigin',()=>{
    const connections = ref([])
    const status = ref('ok')
    const connection = ref(null)
    const selectDataoriginType = ref({})
    const isEdit = ref(false)
    const editDataOriginParam = ref({})
    async function asyncGetConnections(param:object){
        try{
            const res = await getConnections(param)
            connections.value = res.data.list
            status.value = res.data.nextPage===0 ?  'empty' : 'ok'      
        }catch(err){
            ElMessage({
                type: 'error',
                message: err
            })
        }
    }


    function selectConnection(param:number){
        connections.value.forEach((self:object,index:number)=>{
            self.status = index == param ? true : false
        })
        connection.value = connections.value[param]
    }

    function changeSelectDataoriginType(param:object){
        selectDataoriginType.value = param
    }

    function changeIsEdit(param:boolean){
        isEdit.value = param
    }

    function changeEditDataOriginParam(param:object){
        editDataOriginParam.value = param
    }
    return {connections,asyncGetConnections,status,selectConnection,connection,selectDataoriginType,changeSelectDataoriginType,isEdit,editDataOriginParam,changeIsEdit,changeEditDataOriginParam}
})
export default {useLoginStore,useDataoriginStore,useIndexStore}