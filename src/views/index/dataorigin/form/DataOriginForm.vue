<template>
    <div>
        <div class="mt-2 ml-2 mr-2">
            <div class="d-flex flex-row justify-space-between align-center border-b-sm pb-2">
                <div>
                    <v-icon icon="mdi:mdi-keyboard-backspace" size="small" class="cursor-pointer" @click="changeMainContent('SelectDataOrigin')"></v-icon>
                    <span class="text-body-2 ml-2">{{ dataOriginParam.databaseType }}</span>
                </div>
                <div>
                    <v-btn size="small" @click="changeMainContent('DataOrigin')">
                        <span class="text-body-2">取消</span>
                    </v-btn>
                    <v-btn class="ml-2" size="small" color="warning" @click="test">
                        <span class="text-body-2">测试连接</span>
                    </v-btn>
                    <v-btn class="ml-2" size="small" color="success" @click="submit">
                        <span class="text-body-2">保存</span>
                    </v-btn>
                </div>
            </div>
            <div class="mt-6">
                <el-form :model="dataOriginParam" :rules="rules" label-width="auto" size="small" style="width:30%">
                    <el-form-item prop="name">
                        <template #label>
                            <span class="text-caption font-weight-bold">数据连接名称</span>
                        </template>
                        <el-input v-model="dataOriginParam.name" placeholder="数据连接名称" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <template #label>
                            <span class="text-caption font-weight-bold">驱动</span>
                        </template>
                        <el-input v-model="dataOriginParam.driver" disabled  ></el-input>
                    </el-form-item>
                    <el-form-item prop="databaseName">
                        <template #label>
                            <span class="text-caption font-weight-bold">数据库名称</span>
                        </template>
                        <el-input v-model="dataOriginParam.databaseName" placeholder="数据库名称" ></el-input>
                    </el-form-item>
                    <el-form-item prop="host">
                        <template #label>
                            <span class="text-caption font-weight-bold">主机</span>
                        </template>
                        <el-input v-model="dataOriginParam.host" placeholder="主机" ></el-input>
                    </el-form-item>
                    <el-form-item prop="port">
                        <template #label>
                            <span class="text-caption font-weight-bold">端口</span>
                        </template>
                        <el-input v-model="dataOriginParam.port" placeholder="端口" ></el-input>
                    </el-form-item>
                    <el-form-item prop="user">
                        <template #label>
                            <span class="text-caption font-weight-bold">用户名</span>
                        </template>
                        <el-input v-model="dataOriginParam.user" placeholder="用户名" ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <template #label>
                            <span class="text-caption font-weight-bold">密码</span>
                        </template>
                        <el-input v-model="dataOriginParam.password" placeholder="密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <template #label>
                            <span class="text-caption font-weight-bold">编码</span>
                        </template>
                        <el-select v-model="dataOriginParam.charset" placeholder="请选择编码">
                            <el-option v-for="(item,index) in charsets" :label="item.name" :value="item.value" :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <template #label>
                            <span class="text-caption font-weight-bold">模式</span>
                        </template>
                        <div class="text-caption">
                            <span class="text-blue-lighten-1 cursor-pointer" @click="asyncGetSchemas">点击连接数据库</span>以获取模式列表
                        </div>
                        <el-select v-model="dataOriginParam.databaseSchema" :disabled="schemas.length==0" placeholder="模式">
                            <el-option v-for="(item,index) in schemas" :label="item.schema_name" :value="item.schema_name" :key="index" ></el-option>
                        </el-select>
                    </el-form-item>
                    <v-divider></v-divider>
                    <el-form-item class="mt-2">
                        <template #label>
                            <span class="text-caption font-weight-bold">数据连接URL</span>
                        </template>
                        <el-input v-model="dataOriginParam.url" placeholder="数据连接URL" ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <template #label>
                            <el-button text @click="operateSettings">
                                <v-icon icon="fas fa-caret-right" v-if="highStatus"></v-icon>
                                <v-icon icon="fas fa-caret-down" v-else></v-icon>
                                <span class="text-caption">高级设置</span>
                            </el-button>
                        </template>
                    </el-form-item>

                    <div v-if="!highStatus">
                        <el-form-item class="mt-2">
                            <template #label>
                                <span class="text-caption font-weight-bold">初始化连接数</span>
                            </template>
                            <el-input-number v-model="dataOriginParam.connectionPool.initialSize" placeholder="初始化连接数" ></el-input-number>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">最大活动连接数</span>
                            </template>
                            <el-input-number v-model="dataOriginParam.connectionPool.maxActive" placeholder="最大活动连接数" ></el-input-number>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">最大空闲连接数</span>
                            </template>
                            <el-input-number v-model="dataOriginParam.connectionPool.maxIdle" placeholder="最大空闲连接数" ></el-input-number>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">最小空闲连接数</span>
                            </template>
                            <el-input-number v-model="dataOriginParam.connectionPool.minIdle" placeholder="最小空闲连接数" ></el-input-number>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">最大等待时间</span>
                            </template>
                            <div>
                                <el-input-number v-model="dataOriginParam.connectionPool.maxWait" placeholder="最大等待时间" ></el-input-number>
                                毫秒
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">SQL验证查询</span>
                            </template>
                            <el-input type="textarea" v-model="dataOriginParam.connectionPool.validationQuery" placeholder="请输入" ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">获取连接前检验</span>
                            </template>
                            <el-select v-model="dataOriginParam.connectionPool.testOnBorrow">
                                <el-option label="是" :value="true"></el-option>
                                <el-option label="否" :value="false"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">归还连接前检验</span>
                            </template>
                            <el-select v-model="dataOriginParam.connectionPool.testOnReturn">
                                <el-option label="是" :value="true"></el-option>
                                <el-option label="否" :value="false"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">开启空闲回收器检验</span>
                            </template>
                            <el-select v-model="dataOriginParam.connectionPool.testWhileIdle">
                                <el-option label="是" :value="true"></el-option>
                                <el-option label="否" :value="false"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">空闲连接回收器休眠时间</span>
                            </template>
                            <div>
                                <el-input-number v-model="dataOriginParam.connectionPool.timeBetweenEvictionRunsMillis" placeholder="空闲连接回收器休眠时间" ></el-input-number>
                                毫秒
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">空闲连接回收检查数</span>
                            </template>
                            <el-input-number v-model="dataOriginParam.connectionPool.numTestsPerEvictionRun" placeholder="空闲连接回收检查数" ></el-input-number>
                        </el-form-item>
                        <el-form-item>
                            <template #label>
                                <span class="text-caption font-weight-bold">保持空闲最小时间值</span>
                            </template>
                            <div>
                                <el-input-number v-model="dataOriginParam.connectionPool.minEvictableIdleTimeMillis" placeholder="保持空闲最小时间值" ></el-input-number>
                                秒
                            </div>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
        <div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import {useDataoriginStore,useIndexStore,useLoginStore} from '@/store/index'
import { storeToRefs } from 'pinia'
import {ref,onMounted,onBeforeMount} from 'vue'
import {getCharsets,getSchemas,testConnection,insertDataOrigin,checkConnectionName} from '@/api/dataorigin.ts'
import {ElMessage} from 'element-plus'
import moment from 'moment'

const dataoriginStore = useDataoriginStore()
const indexStore = useIndexStore()
const loginStore = useLoginStore()
const {user} = storeToRefs(loginStore)
const {selectDataoriginType,isEdit,editDataOriginParam} = storeToRefs(dataoriginStore)
const {changeMainContent} = indexStore
const charsets = ref([])
const schemas = ref([])
const highStatus = ref(true)
const dataOriginParam = ref(null)

const rules = ref({
    name: [
        {
            validator: validateName,
            trigger: 'blur'
        }
    ],
    databaseName: [
        {
            required: true,
            trigger: 'blur',
            message: '数据库名称不能为空'
        }
    ],
    host: [
        {
            required: true,
            trigger: 'blur',
            message: '主机不能为空'
        }
    ],
    port: [
        {
            required: true,
            trigger: 'blur',
            message: '端口不能为空'
        }
    ],
    user: [
        {
            required: true,
            trigger: 'blur',
            message: '用户名不能为空'
        }
    ],
    password: [
        {
            required: true,
            trigger: 'blur',
            message: '密码不能为空'
        }
    ]

})
onBeforeMount(()=>{
    console.log(editDataOriginParam.value)
    dataOriginParam.value = isEdit.value ? editDataOriginParam.value : {
        name: '',
        driver: '',
        databaseName: '',
        host: '',
        port: '',
        user: '',
        password: '',
        charset: '',
        databaseSchema: '',
        url: '',
        databaseType: selectDataoriginType.value.type,
        connectionPool: {
            initialSize: 0,
            maxActive: 50,
            maxIdle: 10,
            minIdle: 0,
            maxWait: 10000,
            validationQuery: '',
            testOnBorrow: true,
            testOnReturn: false,
            testWhileIdle: false,
            timeBetweenEvictionRunsMillis: -1,
            numTestsPerEvictionRun: 3,
            minEvictableIdleTimeMillis: 1800
        },
        creator: user.value.value.name,
        createTime: ''
    }
})

onMounted(async function(){
    try{
        const res = await getCharsets()
        charsets.value = res.data 
    }catch(err){
        ElMessage({
            type: 'error',
            message: err
        })
    }
    dataOriginParam.value.driver = dataOriginParam.value.driver ? dataOriginParam.value.driver : selectDataoriginType.value.driver
})

async function asyncGetSchemas(){
    try{
        const res = await getSchemas(dataOriginParam.value)
        schemas.value = res.data 
    }catch(err){
        ElMessage({
            type: 'error',
            message: err
        })
    }
}

const operateSettings = ()=>{
    highStatus.value = !highStatus.value
}


async function test(){
    let res = await testConnection(dataOriginParam.value)    
}

async function submit(){
    dataOriginParam.value.createTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    let res = await insertDataOrigin(dataOriginParam.value)
}

async function validateName(rule,value,callback){
    let reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]")
    if (!value || value.length === 0 || value.length > 40 || reg.test(value)) {
        callback(new Error("数据连接名称长度不能超出40，不能为空，不能包含特殊字符"));
    } 
    let res = await checkConnectionName({name:value})
    if(res.data){
        callback(new Error("数据连接名称重复"))
    }else{
        callback()
    }
}
</script>