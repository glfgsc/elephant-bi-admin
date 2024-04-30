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
                    <el-icon size="small" color="#409EFF" class="cursor-pointer mr-2" @click="$emit('addWorkbook',workbookName)">
                        <svg t="1713537383805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3669" width="200" height="200"><path d="M951.428148 283.687084 415.268912 827.643913 72.571852 479.961306 158.431336 392.267035l257.471003 261.217327 450.577069-457.129298L951.428148 283.687084z"  p-id="3670"></path></svg>
                    </el-icon>
                    <el-icon size="small" color="#409EFF" class="cursor-pointer" @click="$emit('cancel')">
                        <svg t="1713537444989" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4659" width="200" height="200"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z"  p-id="4660"></path></svg>
                    </el-icon>
                </div>
            </v-card-text>
            <v-card-actions class="d-flex flex-column justify-center align-center text-caption">
                <el-input v-model="workbookName" size="small" ref="input"></el-input>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
const workbookName = ref('')
const input = ref(null)
defineEmits(['addWorkbook','cancel'])
onMounted(()=>{
    input.value.focus()
})
</script>