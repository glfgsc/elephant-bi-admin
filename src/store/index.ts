import { defineStore } from 'pinia'
import {ref} from 'vue'
import {login} from '@/api/login.ts'
import {getConnections} from '@/api/dataorigin.ts'
import {getWorkbooks} from '@/api/workbook.ts'
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

<<<<<<< HEAD
export const useDataSetStore =defineStore('dataset',()=>{
    const workbooks = ref([])
    async function asyncGetWorkbooks(param:object){
        try{
            let res  = await getWorkbooks(param)
=======
export const useDataSetStore = defineStore('dataset',()=>{
    const workbooks = ref([])
    const locations = ref([])
    const sortColumn = ref('name')
    async function asyncGetWorkbooks(param:object){
        try{
            let res  = await getWorkbooks(param)
            const index = locations.value.findIndex(item=>item.parentId == param.parentId)
            if(index == -1){
                locations.value.push(param)
            }            
>>>>>>> 7b51a8c (Update)
            workbooks.value = res.data
        }catch(err){
            ElMessage({
                type: 'error',
                message: err
            })
        }
    }
<<<<<<< HEAD
    return {workbooks,asyncGetWorkbooks}
=======

    async function changeLocations(index:number){
        locations.value = locations.value.slice(0,index+1)
        try{
            const param = locations.value[index]
            let res  = await getWorkbooks(param)        
            workbooks.value = res.data
        }catch(err){
            ElMessage({
                type: 'error',
                message: err
            })
        }
    }

    function changeSortColumn(param:string){
        sortColumn.value = param
    }
    return {workbooks,asyncGetWorkbooks,locations,changeLocations,sortColumn,changeSortColumn}
>>>>>>> 7b51a8c (Update)
})
export default {useLoginStore,useDataoriginStore,useIndexStore,useDataSetStore}