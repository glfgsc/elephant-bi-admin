<template>
<div 
class="data-origin-item text-body-2 cursor-pointer d-flex flex-row justify-space-between align-center" 
ref="item" 
@click="$emit('selectConnectionItem')" 
@mouseenter="changeStatus('#EEEEEE',true)" 
@mouseleave="changeStatus('',false)">
    <span>
        <v-icon icon="mdi:mdi-link-variant"></v-icon>
        {{ props.dataOrigin.name }}
    </span>
    <v-menu
    location="right"
    >
        <template v-slot:activator="{props}">
            <v-icon icon="mdi:mdi-dots-vertical" color="info" size="small" v-if="isIconShow" v-bind="props" @click="$emit('selectConnectionItem')"></v-icon>
        </template>
        <v-list density="compact">
            <v-list-item v-for="(item,index) in options" :key="index" :value="index">
                <v-list-item-title class="cursor-pointer">
                    <v-icon :icon="item.icon" size="small"></v-icon>
                    <span class="text-body-2 ml-2">{{ item.title }}</span>
                </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
                <v-icon icon="mdi:mdi-information" color="info" size="small"></v-icon>
                <span class="text-body-2 ml-2 text-grey-lighten-1">创建人:{{ props.dataOrigin.creator }}</span>
            </v-list-item>
            <v-list-item>
                <v-icon ></v-icon>
                <span class="text-body-2 ml-2 text-grey-lighten-1">类型:{{ props.dataOrigin.databaseType }}</span>
            </v-list-item>
        </v-list>
        
    </v-menu>
    
</div>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue'
const props = defineProps(['dataOrigin'])
defineEmits(['selectConnectionItem'])
const item = ref(null)
const isIconShow = ref(false)
const options = ref([
    {
        title: '测试连接',
        icon: 'mdi:mdi-link'
    },
    {
        title: '编辑',
        icon: 'mdi:mdi-pencil'
    },
    {
        title: '重命名',
        icon: 'mdi:mdi-rename'
    },
    {
        title: '复制',
        icon: 'mdi:mdi-content-copy'
    },
    {
        title: '删除',
        icon: 'mdi:mdi-delete'
    }
])
const changeStatus = (color:string,status:boolean)=>{    
    if(!props.dataOrigin.status){
        item.value.style.background = color
        isIconShow.value = status
    }
}

watch(()=>props.dataOrigin.status,(newVal:any)=>{
    item.value.style.background = newVal ? '#C8E6C9' : ''
    isIconShow.value = newVal ? true : false
})
</script>