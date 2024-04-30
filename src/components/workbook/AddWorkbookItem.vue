<template>
    <div style="background-color: #FAFCFF">
        <v-card variant="plain" class="cursor-pointer database-card">
            <v-card-text>
                <div style="z-index:1">
                    <v-img src="/static/img/folder.jpg"  height="50">
                    </v-img>
                </div>
                <div 
                style="z-index:2;position: absolute;top:0;right:0;background-color: #FFFFFF;" 
                class="d-flex flex-row justify-center align-center mt-1 mr-1 pt-1 pb-1 pl-1 pr-1">
                    <el-icon size="small" color="#409EFF" class="cursor-pointer mr-2" @click="addWorkbook(addWorkbookRef)">
                        <svg t="1713537383805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3669" width="200" height="200"><path d="M951.428148 283.687084 415.268912 827.643913 72.571852 479.961306 158.431336 392.267035l257.471003 261.217327 450.577069-457.129298L951.428148 283.687084z"  p-id="3670"></path></svg>
                    </el-icon>
                    <el-icon size="small" color="#409EFF" class="cursor-pointer" @click="addWorkbookFlag=false">
                        <svg t="1713537444989" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4659" width="200" height="200"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"  p-id="4660"></path></svg>
                    </el-icon>
                </div>
            </v-card-text>
            <v-card-actions class="d-flex flex-column justify-center align-center text-caption">
                <el-form :rules="rules" ref="addWorkbookRef" :model="initInsertParam" @submit.native.prevent>
                    <el-form-item prop="name">
                        <el-input v-model="initInsertParam.name" size="small" ref="input" @keydown.enter="addWorkbook(addWorkbookRef)"></el-input>
                    </el-form-item>
                </el-form>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted,inject,reactive} from 'vue'
import {useLoginStore,useDataSetStore} from '@/store/index.ts'
import {insertWorkbook,checkName} from '@/api/workbook.ts'
import {ElMessage} from 'element-plus'
import { storeToRefs } from 'pinia'
import moment from 'moment'
defineEmits(['addWorkbook','cancel'])
const props = defineProps(['parentId'])
const loginStore = useLoginStore()
const datasetStore = useDataSetStore()
const {user} = storeToRefs(loginStore)
const workbookName = ref('')
const input = ref(null)
const addWorkbookFlag = inject('addWorkbookFlag')
const initInsertParam = ref({
    name: '',
    creator: user.value.value.name,
    createTime: '',
    parentId: props.parentId,
    shareAnalysis: 0,
    position: '',
    size: 0,
    type: 0
})
const {locations,sortColumn} = storeToRefs(datasetStore)
const {asyncGetWorkbooks} = datasetStore
const addWorkbookRef = ref<FormInstance>()
const ruleForm = reactive({
    name: ''
})
const rules = reactive<FormRules<typeof ruleForm>>({
    name: [
        {
            validator: validateName,
            trigger: 'blur'
        }
    ]
})

async function validateName(rule:any,value:any,callback:any){
    let reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]")
    if (!value || value.length === 0 || value.length > 40 || reg.test(value)) {
        callback(new Error("工作簿名称长度不能超出40，不能为空，不能包含特殊字符"));
    } 
    try{
        let res = await checkName({name: value,parentId: props.parentId})
        if(!res.data){
            callback(new Error("工作簿名称重复"))
        }
    }catch(err){
        ElMessage({
            message: err,
            type: 'error'
        })
    }
}

async function addWorkbook(formEl:FormInstance | undefined){
    if (formEl){
        await formEl.validate().then(async (valid: any)=>{
            if(valid){
                initInsertParam.value.createTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                initInsertParam.value.position = locations.value.map(item=>item.name).join('/')
                initInsertParam.value.parentId = locations.value[locations.value.length-1].parentId
                try{
                    let res = await insertWorkbook(initInsertParam.value)
                    if(res.data == 1){
                        addWorkbookFlag.value = false
                        await asyncGetWorkbooks({parentId: props.parentId,sortColumn: sortColumn.value})
                    }
                }catch(err){
                    ElMessage({
                        type: 'error',
                        message: err
                    })
                }
            }
        })
    }
    
}
onMounted(()=>{
    input.value.focus()
})
</script>