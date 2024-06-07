<template>
    <div :style="{
        'min-height':'100vh'
    }">
        <van-search v-model="value" placeholder="输入影院名称" show-action @cancel="back"></van-search>
        <div class="cinema-list" >
            <ul>
                <li v-for="item in filterList" :key="item.cinemaId" v-if="value">
                    <a href="" class="wraper">
                        <div class="cinema-info">
                            <span class="cinema-name">{{ item.name }}</span>
                            <span class="cinema-address">{{ item.address }}</span>
                        </div>
                        <div class="price">
                            <div>
                                ￥{{ item.lowPrice / 100 }}起
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Search } from 'vant';

export default {
    data() {
        return {
            value: ''
        }
    },
    computed: {
        filterList() {
            if(this.value)
            return this.$store.state.cinemaList.filter(
                item => {
                    return item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase())
                }
            )
            else{
                return []
            }
        }
    },
    mounted() {
        if (this.$store.state.cinemaList.length === 0) {
            this.$store.dispatch('getCinemaList', this.$store.state.cityId)
        }

    },
    components: {
        [Search.name]: Search
    },
    methods: {
        back() {
            this.$router.back()
        },

    }
}
</script>

<style>
.cinema-list {
    background-color: #fff;
    
    padding-bottom: 1.3067rem;
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
}</style>