<template>
    <div class="city-search" ref="citySearch">
        <van-search v-model="CityValue" placeholder="请输入城市名或者拼音" @search="go" ></van-search>
    </div>
</template>

<script>
import { Search } from 'vant';
export default {
    data(){
        return {
            CityValue:'',
            height:0
        } 
    },
    components:{
        [Search.name]:Search
    },
    methods:{
        go(){
            console.log('go');
        }
    },
    mounted(){
        this.$refs.citySearch.style.top = '46px '
        this.height= this.$refs.citySearch.scrollHeight
    }
}
</script>

<style scoped>
.city-search {
    position: fixed;
    
    width: 100%;
    z-index: 999;
}

</style>