<template>
    <div class="nowplay">
        <myheader v-if="$route.name == 'nowplaying' || $route.name == 'commingsoon' || $route.path == '/films'"></myheader>
        <router-view></router-view>
        <tabbar v-if="$route.name == 'nowplaying' || $route.name == 'commingsoon'"></tabbar>
    </div>
</template>

<script>
// import { RouterView } from 'vue-router';
import bus from '@/Bus/bus';
import tabbar from '@/components/tabbar.vue'
import header from '@/components/header.vue'

export default {
    name:'films',
    data(){
        return {
            showNav:true
        }
    },
    methods:{
        
    },
    mounted(){
        bus.$on('ChangeShow',(d)=>{
            this.showNav = d
        })
        
    },
    components: { tabbar,[header.name]:header },
}
</script>


<style scoped>
.router-link-active {
    color: #ff5f16;
}

.router-link-active>span {
    border-bottom: 1px solid #ff5f16;
}
.nowplay {
    position: relative;
}
</style>