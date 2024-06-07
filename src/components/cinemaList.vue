<template>
    <div class="cinema-list">
        <ul>
            <li v-for="item in $store.state.cinemaList" :key="item.cinemaId">
                <a href="" class="wraper">
                    <div class="cinema-info">
                        <span class="cinema-name">{{ item.name }}</span>
                        <span class="cinema-address">{{ item.address }}</span>
                    </div>
                    <div class="price">
                            <div>
                                ￥{{ item.lowPrice/100 }}起
                            </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>

</template>


<script>
import axios from 'axios'
export default {
    data(){
        return {
            cinemas:[]
        }
    },
    mounted(){
        
        if(this.$store.state.cinemaList.length === 0){
            
            this.$store.dispatch('getCinemaList',this.$store.state.cityId)
        }
    }
}

</script>


<style scoped>
.cinema-list {
    background-color: #fff;
    padding-bottom: 1.3067rem;
    padding-top: 44px;
}
.cinema-list li {
    padding: .4rem;
    padding-right: .2667rem;
}
.wraper {
    display: flex;
    
}
.cinema-info {
    box-sizing: border-box;
    width: calc(100% - 70px);
    padding-right: .4rem;
}
.cinema-info span {
    float: left;
    max-width: 81%;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cinema-name {
    font-size: .4rem;
    color: #191a1b;
}
.cinema-address {

    color: #797d82;
    font-size: 12px;
    margin-top: .1333rem;

}
.price {
    width: 1.8667rem;
    text-align: center;
}
.price div {
    font-size: 15px;
    color: #ff5f16;
}
</style>