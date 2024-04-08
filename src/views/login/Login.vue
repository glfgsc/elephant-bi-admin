<template>
    <div class="d-flex flex-row justify-center align-center container">
        <v-sheet
        :width="'50%'"
        :height="'50%'"
        border="sm"
        class="d-flex flex-row justify-start align-center"
        style="box-shadow: var(--el-box-shadow);"
        >
            <v-sheet
            :width="'50%'"
            :height="'100%'"
            class="login-img">
                <v-sheet
                :width="'100%'"
                :height="'100%'"
                :color="colors.blue.darken3"
                class="login-img-mask d-flex flex-column justify-center align-center">
                    <v-icon icon="mdi:mdi-elephant" size="x-large">
                    </v-icon>
                    <span class="text-h5">Elephant BI</span>
                </v-sheet>
            </v-sheet>
            <v-sheet
            :width="'50%'"
            :height="'100%'"
            class="d-flex flex-column justify-center align-center">
                <v-form ref="loginForm" fast-fail @submit.prevent style="width:60%">
                    <v-text-field
                    v-model="user.name"
                    variant="underlined"
                    density="compact"
                    >
                        <template v-slot:label>
                            <span class="text-body-2">用户名</span>
                        </template>
                        <template v-slot:prepend>
                            <v-icon icon="mdi:mdi-account" size="small" color="primary"></v-icon>
                        </template>
                    </v-text-field>
                    <v-text-field
                    v-model="user.password"
                    variant="underlined"
                    density="compact"
                    class="mt-5"
                    >
                        <template v-slot:label>
                            <span class="text-body-2">密码</span>
                        </template>
                        <template v-slot:prepend>
                            <v-icon icon="mdi:mdi-lock" size="small" color="primary"></v-icon>
                        </template>
                    </v-text-field>
                    <v-checkbox  color="primary" class="mt-3" v-model="isRemember">
                        <template v-slot:label>
                            <span class="text-body-2">记住账号</span>
                        </template>
                    </v-checkbox>
                    <v-btn color="primary" style="width:100%" class="mt-3" @click="submit">
                        登录
                    </v-btn>
                </v-form>
            </v-sheet>
        </v-sheet>
    </div>
</template>

<script lang="ts" setup>
import colors from 'vuetify/util/colors'
import {ref,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import Cookies from 'js-cookie'
import {Base64} from 'js-base64'
import {useLoginStore} from '@/store/index'
const isRemember = ref(false)
const router = useRouter()
const user= ref<{name:string,password:string}>({
    name: '',
    password: '',
    
})
const store = useLoginStore()
const {asyncLogin} = store

const submit = async ()=>{
    await asyncLogin(user)
    router.push({name:'Index',query:{name:user.value.name}})
    if(isRemember.value){
        const localUser = '{"name":"'+Base64.encode(user.value.name)+'","password":"'+Base64.encode(user.value.password)+'"}'
        Cookies.set('local_user',localUser)
    }else{
        Cookies.remove('local_user')
    }
}

onMounted(()=>{
    if(Cookies.get('local_user')){
        isRemember.value = true
        const localUser = JSON.parse(Cookies.get('local_user'))
        user.value.name = Base64.decode(localUser.name)
        user.value.password = Base64.decode(localUser.password)
    }else{
        isRemember.value = false
    }
})
</script>