<template>
<v-app>
    <v-app-bar color="primary" style="height:8vh">
        <template v-slot:prepend>
            <v-app-bar-nav-icon>
                <v-icon icon="mdi:mdi-elephant" @click="changeIsMenuShow"></v-icon>
            </v-app-bar-nav-icon>
            <v-app-bar-title>
                Elephant BI
            </v-app-bar-title>
        </template>
        <template v-slot:append>
            <v-icon
            icon="mdi:mdi-message-reply-text-outline"
            size="small"
            class="ml-2">
            </v-icon>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-avatar
                    class="ml-5"
                    size="small">
                        <v-img src="/static/img/avatar.png">
                        </v-img>
                    </v-avatar>
                    <span v-bind="props" class="cursor-pointer ml-2 text-caption"> 
                        {{ user.value.name }} 
                    </span>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-app-bar>
    <v-navigation-drawer
    v-model="isMenuShow"
    :disable-resize-watcher="true"
    rail
    expand-on-hover
    >
        <v-list density="compact" nav v-model:selected="selectItem">
            <v-list-item v-for="(item,index) in menuOptions" :key="index" class="cursor-pointer" color="primary" :value="item.value" @click="navigation(item.value)">
                <template v-slot:title>
                    <span class="text-caption">{{ item.title }}</span>
                </template>
                <template v-slot:prepend>
                    <v-icon :icon="'mdi:'+item.icon">
                    </v-icon>
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
        <component :is="mainContent"></component>
    </v-main>
</v-app>


</template>

<script lang="ts" setup>
import '@/assets/styles/utils.scss'
import { storeToRefs } from 'pinia'
import {useLoginStore,useIndexStore} from '@/store/index'
import {reactive, ref} from 'vue'
const items = ref([
    {
        title: '账号设置'
    },
    {
        title: '退出登录'
    }
])

const selectItem = ['DataOrigin']
const menuOptions = reactive([
    {title:'数据源管理',icon:'mdi-database',value: 'DataOrigin'},
    {title:'数据集管理',icon:'mdi-microsoft-excel',value: 'DataSet'},
    {title:'仪表板管理',icon:'mdi-tablet-dashboard',value: 'Dashboard'}
])
const loginStore = useLoginStore()
const indexStore = useIndexStore()
const {user} = storeToRefs(loginStore)
const {mainContent} = storeToRefs(indexStore)
const {changeMainContent} = indexStore
const navigation = (option:any)=>{
    changeMainContent(option)
}
const isMenuShow = ref(true)
const changeIsMenuShow = ()=>{
    isMenuShow.value = !isMenuShow.value
}
</script>

<script lang="ts">
import DataSet from '@/views/index/dataset/DataSet.vue'
import DataOrigin from '@/views/index/dataorigin/DataOrigin.vue'
import Dashboard from '@/views/index/dashboard/Dashboard.vue'
import SelectDataOrigin from '@/views/index/dataorigin/form/SelectDataOrigin.vue'
import DataOriginForm from '@/views/index/dataorigin/form/DataOriginForm.vue'
export default {
  components: {
    DataSet,
    DataOrigin,
    Dashboard,
    SelectDataOrigin,
    DataOriginForm
  }
}
</script>