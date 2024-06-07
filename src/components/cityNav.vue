<template>
    <div class="title">
        <van-nav-bar title="城市" @click-left="left">
            <template #left>
                <van-icon name="cross" size="20" color="black" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
import { NavBar,Icon } from 'vant';
export default {
    components:{
        [NavBar.name]:NavBar,
        [Icon.name]:Icon
    },
    methods:{
        left(){
            this.$router.push('films/nowPlaying')
        }
    }
}

</script>


<style scoped>
.title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}


</style>