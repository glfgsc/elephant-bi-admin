<template> 
        <div 
        v-context-menu="menuOptions"
        @click="$emit('getWorkbooks',{parentId: props.workbook.id})"
        >
            <v-card 
            variant="plain" 
            class="cursor-pointer workbook-card"
            >
                <v-card-text>
                    <div style="z-index:1">
                        <v-img src="/static/img/folder.jpg"  height="50" v-if="props.workbook.type==0">
                        </v-img>
                        <v-img src="/static/img/sql.jpg" height="50" v-if="props.workbook.type==1&&props.workbook.fileType==1"></v-img>
                        <v-img src="/static/img/excel.jpg" height="50" v-if="props.workbook.type==1&&props.workbook.fileType==2"></v-img>
                    </div>
                    
                    <div 
                    style="z-index:2;position: absolute;top:0;right:0;background-color: #FFFFFF;" 
                    class="d-flex flex-row justify-space-between align-center mt-1 mr-1 ml-1"
                    >
                        <div class="d-flex flex-row justify-center align-center pl-1 pr-1 pt-1 pb-1" v-if="isUpdate">
                            <el-icon size="small" color="#409EFF" class="cursor-pointer mr-2" @click="rename">
                                <svg t="1713537383805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3669" width="200" height="200"><path d="M951.428148 283.687084 415.268912 827.643913 72.571852 479.961306 158.431336 392.267035l257.471003 261.217327 450.577069-457.129298L951.428148 283.687084z"  p-id="3670"></path></svg>
                            </el-icon>
                            <el-icon size="small" color="#409EFF" class="cursor-pointer" @click="isUpdate=false">
                                <svg t="1713537444989" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4659" width="200" height="200"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"  p-id="4660"></path></svg>
                            </el-icon>
                        </div>
                        <div class="d-flex flex-row justify-center align-center pl-1 pr-1 pt-1 pb-1" v-else>
                            <div class="operate-btn">
                                <el-icon size="small" color="#409EFF" class="cursor-pointer mr-2" @click="$emit('addWorkbook',workbookName)">
                                    <svg t="1713578749180" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5309" width="10" height="10"><path d="M679.4 169c33.1 0 60 26.9 60 60s-26.9 60-60 60c-9.7 0-19-2.2-27.5-6.7l-15.2-7.9-8.8-14.7c-5.5-9.2-8.5-19.9-8.5-30.8 0-33 26.9-59.9 60-59.9M269 451c26.4 0 51.2 10.2 70.1 28.7l15.1 14.8L362 514c4.7 11.7 7.1 24.2 7.1 37 0 5.5-0.5 11.1-1.4 16.6l-3.4 20.7-11.6 17.6C334 634.1 302.8 651 269 651c-55.1 0-100-44.9-100-100s44.9-100 100-100m526 284c33.1 0 60 26.9 60 60s-26.9 60-60 60-60-26.9-60-60c0-1.2 0-2.6 0.1-4l1.1-16.8 9.7-13.7c11.3-16 29.7-25.5 49.1-25.5M679.4 99c-71.8 0-130 58.2-130 130 0 24.4 6.7 47.3 18.5 66.8L388.1 429.7C357.4 399.6 315.4 381 269 381c-93.9 0-170 76.1-170 170s76.1 170 170 170c59.4 0 111.8-30.5 142.1-76.7l254.2 142.1c-0.2 2.8-0.3 5.7-0.3 8.6 0 71.8 58.2 130 130 130s130-58.2 130-130-58.2-130-130-130c-43.9 0-82.7 21.7-106.2 55L436.7 579c1.5-9.1 2.3-18.5 2.3-28 0-22.2-4.3-43.5-12-62.9l192.7-143.6c17.9 9.3 38.2 14.5 59.7 14.5 71.8 0 130-58.2 130-130s-58.2-130-130-130z"  p-id="5310"></path></svg>
                                </el-icon>
                            </div>
                            <div class="operate-btn">
                                <el-icon size="small" color="#409EFF" class="cursor-pointer mr-2" @click="$emit('cancel')">
                                    <svg t="1713578371484" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4281" width="10" height="10"><path d="M921.6 882.688H142.336c-24.576 0-44.032 19.456-44.032 44.032s19.456 44.032 44.032 44.032H921.6c24.576 0 44.032-19.456 44.032-44.032 0-23.552-19.456-44.032-44.032-44.032zM502.784 806.912c8.192 8.192 19.456 12.288 29.696 11.264 10.24 0 21.504-3.072 29.696-11.264l266.24-266.24c15.36-15.36 15.36-40.96 0-56.32s-40.96-15.36-56.32 0L570.368 686.08V89.088c0-21.504-17.408-39.936-39.936-39.936s-39.936 17.408-39.936 39.936v592.896L292.864 484.352c-15.36-15.36-40.96-15.36-56.32 0s-15.36 40.96 0 56.32l266.24 266.24z"  p-id="4282"></path></svg>
                                </el-icon>
                            </div>
                            <div class="operate-btn">
                                <el-dropdown>
                                    <el-icon size="small" color="#409EFF" class="cursor-pointer">
                                        <svg t="1713602957896" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12802" width="200" height="200"><path d="M144 512a80 80 0 1 0 160 0 80 80 0 1 0-160 0zM432 512a80 80 0 1 0 160 0 80 80 0 1 0-160 0zM720 512a80 80 0 1 0 160 0 80 80 0 1 0-160 0z" p-id="12803"></path></svg>
                                    </el-icon>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item>
                                                <el-icon size="small" color="#000000">
                                                    <svg t="1713578790968" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6330" width="10" height="10"><path d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"  p-id="6331"></path></svg>
                                                </el-icon>
                                                <span class="text-caption ml-4">复制</span>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <el-icon size="small" color="#000000">
                                                    <svg t="1713578821118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7359" width="10" height="10"><path d="M776.8 355.68l-45.12 45.12L810.72 480H544V213.28l79.2 79.04 45.12-45.12L512 90.72l-156.32 156.48 45.12 45.12L480 213.28V480H213.28l79.04-79.2-45.12-45.12L90.72 512l156.48 156.32 45.12-45.12L213.28 544H480v266.72l-79.2-79.04-45.12 45.12L512 933.28l156.32-156.48-45.12-45.12L544 810.72V544h266.72l-79.04 79.2 45.12 45.12L933.28 512l-156.48-156.32z"  p-id="7360"></path></svg>
                                                </el-icon>
                                                <span class="text-caption ml-4">移动</span>
                                            </el-dropdown-item>
                                            <el-dropdown-item @click="showRename">
                                                <el-icon size="small" color="#000000">
                                                    <svg t="1713578858220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8376" width="10" height="10"><path d="M1024 908.8c0 64-51.2 115.2-115.2 115.2H115.2c-64 0-115.2-51.2-115.2-115.2V115.2C0 51.2 51.2 0 115.2 0h793.6c64 0 115.2 51.2 115.2 115.2v793.6zM128 64c-38.4 0-64 25.6-64 64v768c0 38.4 25.6 64 70.4 64H896c38.4 0 64-19.2 64-57.6V128c0-38.4-25.6-64-64-64H128z"  p-id="8377"></path><path d="M544 608m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  p-id="8378"></path><path d="M672 608m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  p-id="8379"></path><path d="M800 608m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  p-id="8380"></path><path d="M320 320H256v64h64v192H256v64h192V576H384V384h64V320H384z"  p-id="8381"></path></svg>
                                                </el-icon>
                                                <span class="text-caption ml-4">重命名</span>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <el-icon size="small" color="#000000">
                                                    <svg t="1713580346870" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11795" width="10" height="10"><path d="M512 0C228.3 0 0 228.3 0 512s228.3 512 512 512 512-228.3 512-512S795.7 0 512 0z m0 215.5c36.3 0 64 27.7 64 64s-27.7 64-64 64-64-27.7-64-64 27.7-64 64-64z m85.3 531.2H426.7c-10.7 0-21.3-6.4-21.3-19.2v-42.7c0-10.7 8.5-23.5 21.3-23.5 10.7 0 21.3-6.4 21.3-19.2V492.8c0-10.7-8.5-23.5-21.3-23.5-10.7 0-21.3-6.4-21.3-19.2v-42.7c0-10.7 8.5-23.5 21.3-23.5h128c10.7 0 21.3 10.7 21.3 23.5v234.7c0 10.7 8.5 19.2 21.3 19.2 10.7 0 21.3 10.7 21.3 23.5v42.7c0.1 10.6-8.5 19.2-21.3 19.2z" p-id="11796"></path></svg>
                                                </el-icon>
                                                <span class="text-caption ml-4">详细信息</span>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <el-icon size="small" color="#000000">
                                                    <svg t="1713578899208" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9397" width="10" height="10"><path d="M202.666667 256h-42.666667a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64H266.666667v565.333333a53.333333 53.333333 0 0 0 53.333333 53.333334h384a53.333333 53.333333 0 0 0 53.333333-53.333334V352a32 32 0 0 1 64 0v469.333333c0 64.8-52.533333 117.333333-117.333333 117.333334H320c-64.8 0-117.333333-52.533333-117.333333-117.333334V256z m224-106.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z m-32 288a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z m170.666666 0a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z"  p-id="9398"></path></svg>
                                                </el-icon>
                                                <span class="text-caption ml-4">删除</span>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                        </div>
                    </div>
                    
                </v-card-text>
                <v-card-actions class="d-flex flex-column justify-center align-center">
                    <div v-if="isUpdate">
                        <el-input 
                        v-model="changedWorkbook.name" 
                        size="small"  
                        id="rename"
                        @keydown.enter="rename"></el-input>
                    </div>
                    <div class="d-flex flex-column justify-center align-center text-caption" v-else>
                        <el-dropdown>
                            <span class="text-caption">{{ props.workbook.name }}</span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>
                                        <span class="text-caption">名称：{{ props.workbook.name }}</span>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <span class="text-caption">{{ props.workbook.updateTime ? '修改时间' : '创建时间' }}：{{ props.workbook.updateTime ? props.workbook.updateTime : props.workbook.createTime}}</span>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <span>{{ props.workbook.updateTime ? props.workbook.updateTime : props.workbook.createTime}}</span>
                    </div>
                </v-card-actions>
            </v-card>
        </div>
</template>

<script setup lang="ts">
import {nextTick, ref} from 'vue'
import {open,download,share,copy,move,remove,view} from '@/utils/contextMenuItemOperate'
import moment from 'moment'
import {updateWorkbook} from '@/api/workbook'
import {useDataSetStore} from '@/store/index.ts'
import {ElMessage} from 'element-plus'
const props = defineProps(['workbook'])
const emit = defineEmits(['rename','getWorkbooks'])
const changedWorkbook = ref(JSON.parse(JSON.stringify(props.workbook)))
const isUpdate = ref(false)
const menuOptions = ref({
    menuOptions: [
        {
            label: '打开',
            action: open,
            icon: '<svg t="1713579011266" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10626" width="10" height="10"><path d="M275.84 160H124.192l1.824 580.096a32 32 0 0 1-64 0L60.16 160a64 64 0 0 1 64-64h177.92l97.28 96h498.272a32 32 0 1 1 0 64H373.152l-97.28-96z"  p-id="10627"></path><path d="M127.52 735.616a32 32 0 0 1-63.04-10.944l54.624-314.144C127.904 359.936 174.784 320 225.76 320h668.864c55.36 0 93.92 46.72 84.384 101.472l-72.32 416C897.824 888.064 850.976 928 800 928H160a32 32 0 0 1 0-64h640c19.712 0 40.096-17.376 43.616-37.472l72.32-416c2.784-15.904-5.984-26.528-21.312-26.528H225.76c-19.68 0-40.096 17.376-43.584 37.472l-54.656 314.144z"  p-id="10628"></path></svg>'
        },
        {
            label: '下载',
            action: download,
            icon: '<svg t="1713578371484" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4281" width="10" height="10"><path d="M921.6 882.688H142.336c-24.576 0-44.032 19.456-44.032 44.032s19.456 44.032 44.032 44.032H921.6c24.576 0 44.032-19.456 44.032-44.032 0-23.552-19.456-44.032-44.032-44.032zM502.784 806.912c8.192 8.192 19.456 12.288 29.696 11.264 10.24 0 21.504-3.072 29.696-11.264l266.24-266.24c15.36-15.36 15.36-40.96 0-56.32s-40.96-15.36-56.32 0L570.368 686.08V89.088c0-21.504-17.408-39.936-39.936-39.936s-39.936 17.408-39.936 39.936v592.896L292.864 484.352c-15.36-15.36-40.96-15.36-56.32 0s-15.36 40.96 0 56.32l266.24 266.24z"  p-id="4282"></path></svg>'
        },
        {
            label: '分享',
            action: share,
            icon: '<svg t="1713578749180" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5309" width="10" height="10"><path d="M679.4 169c33.1 0 60 26.9 60 60s-26.9 60-60 60c-9.7 0-19-2.2-27.5-6.7l-15.2-7.9-8.8-14.7c-5.5-9.2-8.5-19.9-8.5-30.8 0-33 26.9-59.9 60-59.9M269 451c26.4 0 51.2 10.2 70.1 28.7l15.1 14.8L362 514c4.7 11.7 7.1 24.2 7.1 37 0 5.5-0.5 11.1-1.4 16.6l-3.4 20.7-11.6 17.6C334 634.1 302.8 651 269 651c-55.1 0-100-44.9-100-100s44.9-100 100-100m526 284c33.1 0 60 26.9 60 60s-26.9 60-60 60-60-26.9-60-60c0-1.2 0-2.6 0.1-4l1.1-16.8 9.7-13.7c11.3-16 29.7-25.5 49.1-25.5M679.4 99c-71.8 0-130 58.2-130 130 0 24.4 6.7 47.3 18.5 66.8L388.1 429.7C357.4 399.6 315.4 381 269 381c-93.9 0-170 76.1-170 170s76.1 170 170 170c59.4 0 111.8-30.5 142.1-76.7l254.2 142.1c-0.2 2.8-0.3 5.7-0.3 8.6 0 71.8 58.2 130 130 130s130-58.2 130-130-58.2-130-130-130c-43.9 0-82.7 21.7-106.2 55L436.7 579c1.5-9.1 2.3-18.5 2.3-28 0-22.2-4.3-43.5-12-62.9l192.7-143.6c17.9 9.3 38.2 14.5 59.7 14.5 71.8 0 130-58.2 130-130s-58.2-130-130-130z"  p-id="5310"></path></svg>'
        },
        {
            label: '复制',
            action: copy,
            icon: '<svg t="1713578790968" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6330" width="10" height="10"><path d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"  p-id="6331"></path></svg>'
        },
        {
            label: '移动',
            action: move,
            icon: '<svg t="1713578821118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7359" width="10" height="10"><path d="M776.8 355.68l-45.12 45.12L810.72 480H544V213.28l79.2 79.04 45.12-45.12L512 90.72l-156.32 156.48 45.12 45.12L480 213.28V480H213.28l79.04-79.2-45.12-45.12L90.72 512l156.48 156.32 45.12-45.12L213.28 544H480v266.72l-79.2-79.04-45.12 45.12L512 933.28l156.32-156.48-45.12-45.12L544 810.72V544h266.72l-79.04 79.2 45.12 45.12L933.28 512l-156.48-156.32z"  p-id="7360"></path></svg>'
        },
        {
            label: '重命名',
            action: ()=>{
                isUpdate.value = true
                nextTick(()=>{
                    document.getElementById('rename').focus()
                })
            },
            icon: '<svg t="1713578858220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8376" width="10" height="10"><path d="M1024 908.8c0 64-51.2 115.2-115.2 115.2H115.2c-64 0-115.2-51.2-115.2-115.2V115.2C0 51.2 51.2 0 115.2 0h793.6c64 0 115.2 51.2 115.2 115.2v793.6zM128 64c-38.4 0-64 25.6-64 64v768c0 38.4 25.6 64 70.4 64H896c38.4 0 64-19.2 64-57.6V128c0-38.4-25.6-64-64-64H128z"  p-id="8377"></path><path d="M544 608m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  p-id="8378"></path><path d="M672 608m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  p-id="8379"></path><path d="M800 608m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  p-id="8380"></path><path d="M320 320H256v64h64v192H256v64h192V576H384V384h64V320H384z"  p-id="8381"></path></svg>'
        },
        {
            label: '详细信息',
            action: view,
            icon: '<svg t="1713580346870" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11795" width="10" height="10"><path d="M512 0C228.3 0 0 228.3 0 512s228.3 512 512 512 512-228.3 512-512S795.7 0 512 0z m0 215.5c36.3 0 64 27.7 64 64s-27.7 64-64 64-64-27.7-64-64 27.7-64 64-64z m85.3 531.2H426.7c-10.7 0-21.3-6.4-21.3-19.2v-42.7c0-10.7 8.5-23.5 21.3-23.5 10.7 0 21.3-6.4 21.3-19.2V492.8c0-10.7-8.5-23.5-21.3-23.5-10.7 0-21.3-6.4-21.3-19.2v-42.7c0-10.7 8.5-23.5 21.3-23.5h128c10.7 0 21.3 10.7 21.3 23.5v234.7c0 10.7 8.5 19.2 21.3 19.2 10.7 0 21.3 10.7 21.3 23.5v42.7c0.1 10.6-8.5 19.2-21.3 19.2z" p-id="11796"></path></svg>'
        },
        {
            label: '删除',
            action: remove,
            icon: '<svg t="1713578899208" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9397" width="10" height="10"><path d="M202.666667 256h-42.666667a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64H266.666667v565.333333a53.333333 53.333333 0 0 0 53.333333 53.333334h384a53.333333 53.333333 0 0 0 53.333333-53.333334V352a32 32 0 0 1 64 0v469.333333c0 64.8-52.533333 117.333333-117.333333 117.333334H320c-64.8 0-117.333333-52.533333-117.333333-117.333334V256z m224-106.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z m-32 288a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z m170.666666 0a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z"  p-id="9398"></path></svg>'
        }
    ],
    className: 'context-menu'
})
const datasetStore = useDataSetStore()
const {asyncGetWorkbooks} = datasetStore
const showRename = () => {
    isUpdate.value = true
    nextTick(()=>{
        document.getElementById('rename').focus()
    })
}

async function rename(){
    try{
        changedWorkbook.value.updateTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        let res = await updateWorkbook(changedWorkbook.value)
        if(res.code == 200){
            await asyncGetWorkbooks({'parentId':0})      
            isUpdate.value = false 
        }
    }catch(err){
        ElMessage({
            message: err,
            type: 'error'
        })
    }
}

window.addEventListener('click', () => {
      const menuElements = document.querySelectorAll('.context-menu');
      menuElements.forEach((menuElement) => {
        menuElement.remove();
      });
});


</script>
