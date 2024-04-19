<template>
    <div>
        <div class="mt-2 ml-2 mr-2">
            <div class="d-flex flex-row justify-space-between align-center border-b-sm pb-2">
                <div>
                    <v-icon icon="mdi:mdi-keyboard-backspace" size="small" class="cursor-pointer" @click="changeMainContent('DataOrigin')"></v-icon>
                    <span class="text-caption ml-2">返回</span>
                </div>
                <div>
                    <v-btn size="small" @click="changeMainContent('DataOrigin')">
                        <span class="text-caption">取消</span>
                    </v-btn>
                    <v-btn class="ml-2" size="small" color="info" disabled >
                        <span class="text-caption">保存</span>
                    </v-btn>
                </div>
                
            </div>
        </div>
        <v-row no-gutters>
            <v-col
            lg="2"
            cols="12"
            class="border-e-sm">
                <v-list v-model:selected="selectItem">
                    <v-list-item  value="always">
                        <v-list-item-title class="text-caption">常用</v-list-item-title>
                    </v-list-item>
                    <v-list-item  value="all" >
                        <v-list-item-title class="text-caption">所有</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col lg="10" cols="12">
                <v-row no-gutters v-if="selectItem[0]=='all'">
                    <v-col lg="2" cols="12" v-for="(item,index) in databases" :key="index" class="ml-4 mt-4" >
                        <v-card class="cursor-pointer database-card" @click="selectDataOrigin(item)">
                            <v-card-text>
                                <v-img :src="item.img"  height="100">
                                </v-img>
                            </v-card-text>
                            <v-card-actions class="border-t-sm d-flex flex-row justify-center align-center text-caption">{{ item.type }}</v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>

</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useIndexStore,useDataoriginStore} from '@/store/index'
const selectItem = ref(['all'])
const databases = ref([
    {
        type: 'MySQL',
        img: '/static/img/mysql.jpg',
        driver: 'com.mysql.cj.jdbc.Driver'
    },
    {
        type: 'Postgresql',
        img: '/static/img/postgresql.jpg',
        driver: 'org.postgresql.Driver'
    },
    {
        type: 'Trino',
        img: '/static/img/trino.jpg',
        driver: 'io.trino.jdbc.TrinoDriver'
    }
])
const indexStore = useIndexStore()
const dataoriginStore = useDataoriginStore()
const {changeMainContent} = indexStore
const {changeSelectDataoriginType,changeIsEdit} = dataoriginStore
const selectDataOrigin = (type:object)=>{
    changeIsEdit(false)
    changeSelectDataoriginType(type)
    changeMainContent('DataOriginForm')
}
</script>