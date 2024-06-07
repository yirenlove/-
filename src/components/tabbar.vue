<template>
    <div class="bottom">
        <ul>
            <li><RouterLink to="/films/nowPlaying"><van-icon name="video-o" /><span>电影</span> </RouterLink></li>
            <li><RouterLink to="/cinema"><van-icon name="shop-o" /><span>影院</span></RouterLink></li>
            <li><RouterLink to="/center"><van-icon name="user-o" /><span>我的</span></RouterLink></li>
        </ul>
    </div>
</template>

<script>
// 使用 npm i--save vuex-persistedstate 下载vuex的持久化插件
import { RouterLink } from 'vue-router';
import { Icon } from 'vant';
export default {
    components:{RouterLink,[Icon.name]:Icon}
}


</script>

<style scoped>
div {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
div ul {
    display: flex;
    text-align: center;
    color: #ff5f16;
    justify-content: space-between;
    background-color: #fff;
}
div ul li {
    flex: 1;
    list-style: none;
}
.bottom a {
    text-decoration: none;
    display: block;
    position: relative;
    height: 1.3333rem;
    width: 100%;
    text-align: center;
    line-height: 1.3333rem;
}
.bottom a .van-icon::before {
    font-size: 0.7rem;
}
.bottom a span {
    position: absolute;
    top: 33%;
    left: 38%;
}

</style>