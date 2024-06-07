<template>
    <div>
        <FilmSwiper :key="dataList.length" >
            <SwiperItem v-for="item in dataList" :key="item.title">
                <img :src="item.imgUrl" alt="图片">
            </SwiperItem>
        </FilmSwiper>
        <filmsList :type="1">
            <div class="buy">购票</div>
        </filmsList>
    </div>
</template>

<script>
import FilmSwiper from '@/components/filmSwiper.vue';
import SwiperItem from '@/components/swiperItem.vue';
import filmsList from '@/components/filmsList.vue';
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            dataList: [],
            // items: [],
            // loading: false,
            // finished: false,
            // pageNum: 1,
            // total: 99999
        }
    },
    mounted(){
        axios.get('./test.json').then((res) => res.data).
            then((res) => { this.dataList = res.banner }).
            catch((err) => { console.log(err.message); })
    },    
    components: { FilmSwiper, SwiperItem, filmsList }
}
</script>


<style scoped>
.buy {
    box-sizing: border-box;
    width: 1.3333rem;
    height: .6667rem;
    line-height: .6667rem;
    text-align: center;
    border: .0533rem;
    border-radius: 0.08rem;
    color: #ff5f16;
    font-size: .3467rem;
    position: relative;
}
.buy::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    width: 1.3333rem;
    height: .6667rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: .0533rem solid #ff5f16;
    border-radius: 0.08rem;
}
</style>