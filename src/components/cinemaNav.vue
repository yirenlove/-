<template>
    <div class="CinemaNav">
        <van-nav-bar title="影院" @click-left="handleLeft"  @click-right="handleRight">
            <template #left>
                <span>{{ $store.state.cityName }}</span><van-icon name="arrow-down"  size="12"/>
            </template>
            <template #right>
                <van-icon name="search" size="18px" />
            </template>
        </van-nav-bar>
    </div>

</template>


<script>
import { NavBar,Icon } from 'vant';
export default {
    data(){
        return {

        }
    },
    components:{
        [NavBar.name]:NavBar,
        [Icon.name]:Icon
    },
    methods:{
        handleLeft(){
            this.$router.push('/city')
        },
        handleRight(){
            this.$router.push('/cinema/search')
        }
    }
}
</script>

<style scoped>
.van-nav-bar__title  {
    font-size: 18px;
}
.CinemaNav {
    position: fixed;
    top:0;
    width: 100%;
}
</style>