<template>
<div style="height:90vh">
    <v-tabs
    v-model="tab"
    density="compact"
    slider-color="primary"
    style="height:5vh"
    >
        <v-tab :value="'connectionManage'" >
            <span class="text-caption">数据连接管理</span>
        </v-tab>
        <v-tab :value="'poolStatus'">
            <span class="text-caption">连接池状态</span>
        </v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item value="connectionManage">
            <v-row no-gutters>
                <v-col
                lg="3"
                cols="12"
                class="border-e-sm"
                style="height:85vh">
                    <div class="d-flex flex-row justify-space-between align-center mt-2 ml-2 mr-2 pb-2 border-b-sm">
                        <el-input size="small" clearable v-model="queryConnectionParams.name"  style="width:60%" placeholder="请输入数据连接名称进行模糊搜索" @input="getConnection">
                            <template #prefix>
                                <v-icon icon="mdi:mdi-magnify"></v-icon>
                            </template>
                        </el-input>
                        <v-btn size="small" color="success" @click="changeMainContent('SelectDataOrigin')">
                            <template v-slot:prepend>
                                <v-icon icon="mdi:mdi-plus"></v-icon>
                            </template>
                            新建数据连接
                        </v-btn>
                    </div>
                    <v-infinite-scroll   :items="connections" :onLoad="loadMoreConnection">
                        <data-origin-item 
                        v-for="(item,index) in connections" 
                        :key="index"
                        :data-origin="item"
                        @select-connection-item="selectConnection(index)"
                        >
                        </data-origin-item>
                        <template v-slot:empty>
                            <span style="color:#BDBDBD" class="text-caption">暂无更多数据</span>
                        </template>
                    </v-infinite-scroll>
                </v-col>
                <v-col
                lg="9"
                cols="12">
                    <div>
                        <el-form label-width="auto">
                            <div  v-if="connection" class="mt-2 ml-2 mr-2">
                                <div class="d-flex flex-row justify-space-between align-center  pb-2 border-b-sm">
                                    <span class="text-caption">{{ connection.name }}({{ connection.databaseType }})</span>
                                    <v-btn color="primary" size="small" @click="edit">
                                        编辑连接
                                    </v-btn>
                                </div>
                                <div class="mt-2 d-flex flex-column justify-start align-start">
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">驱动</span>
                                        </template>
                                        <span class="text-caption">{{ connection.driver }}</span>
                                    </el-form-item>
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">数据库名称</span>
                                        </template> 
                                        <span class="text-caption">{{ connection.databaseName ? connection.databaseName : connection.url.split('/')[connection.url.split('/').length-1] }}</span>
                                    </el-form-item>
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">主机</span>
                                        </template> 
                                        <span class="text-caption">{{ connection.host ? connection.host : cnnection.url.split('/')[connection.url.split('/').length-2].split(':')[0] }}</span>
                                    </el-form-item>
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">端口</span>
                                        </template> 
                                        <span class="text-caption">{{ connection.port ? connection.port : connection.url.split('/')[connection.url.split('/').length-2].split(':')[1] }}</span>
                                    </el-form-item>
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">用户名</span>
                                        </template> 
                                        <span class="text-caption">{{ connection.user }}</span>
                                    </el-form-item>
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">密码</span>
                                        </template> 
                                        <span class="text-caption">{{ connection.password }}</span>
                                    </el-form-item>
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">编码</span>
                                        </template> 
                                        <span class="text-caption">{{ connection.charset ? connection.charset : '自动'  }}</span>
                                    </el-form-item>
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">模式</span>
                                        </template> 
                                        <span class="text-caption">{{ connection.schema }}</span>
                                    </el-form-item>
                                    <el-form-item>
                                        <template #label>
                                            <span class="text-caption font-weight-bold">数据连接URL</span>
                                        </template> 
                                        <span class="text-caption">{{ connection.url }}</span>
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
                                            <span class="text-caption">{{ connection.connectionPool.initialSize }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">最大活动连接数</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.maxActive }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">最大空闲连接数</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.maxIdle }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">最小空闲连接数</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.minIdle }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">最大等待时间</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.maxWait }}毫秒</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">SQL验证查询</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.validationQuery }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">获取连接前检验</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.testOnBorrow }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">归还连接前检验</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.testOnReturn }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">开启空闲回收器检验</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.testWhileIdle }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">空闲连接回收器休眠时间</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.timeBetweenEvictionRunsMillis }}毫秒</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">空闲连接回收检查数</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.numTestsPerEvictionRun }}</span>
                                        </el-form-item>
                                        <el-form-item>
                                            <template #label>
                                                <span class="text-caption font-weight-bold">保持空闲最小时间值</span>
                                            </template>
                                            <span class="text-caption">{{ connection.connectionPool.minEvictableIdleTimeMillis }}秒</span>
                                        </el-form-item>
                                    </div>
                                </div>      
                            </div>
                            <div style="width:100%;height:100vh" class="d-flex flex-column justify-center align-center" v-else>
                                <v-icon icon="mdi:mdi-thought-bubble" size="x-large" color="info">
                                </v-icon>
                                <span class="text-caption text-grey-lighten-1">请选择一条数据连接查看</span>
                            </div>
                        </el-form>
                        
                    </div>
                </v-col>
            </v-row>
          
        </v-window-item>

        <v-window-item value="poolStatus">
          连接池状态
        </v-window-item>

      </v-window>
</div>

</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import DataOriginItem from '@/components/dataorigin/DataOriginItem.vue'
import {useDataoriginStore,useIndexStore} from '@/store/index.ts'
import { storeToRefs } from 'pinia'
const tab = ref('connectionManage')
const dataoriginStore = useDataoriginStore()
const indexStore = useIndexStore()
const {connections,status,connection} = storeToRefs(dataoriginStore)
const {asyncGetConnections,selectConnection,changeIsEdit,changeEditDataOriginParam} = dataoriginStore
const {changeMainContent} = indexStore
const highStatus = ref(true)
const queryConnectionParams = ref({
    name: '',
    pageNum: 0,
    pageSize: 50
})

async function getConnection(){
    queryConnectionParams.value.pageNum = 1
    await asyncGetConnections(queryConnectionParams.value)
}

async function loadMoreConnection({ done }) {
    queryConnectionParams.value.pageNum++
    await asyncGetConnections(queryConnectionParams.value)
    done(status.value)
}

const operateSettings = ()=>{
    highStatus.value = !highStatus.value
}

const edit = ()=>{
    changeIsEdit(true)
    changeEditDataOriginParam(connection.value)
    changeMainContent('DataOriginForm')
}

watch(tab,(newVal)=>{
    if(newVal=='connectionManage'){
        queryConnectionParams.value.pageNum = 0
    }
})
</script>