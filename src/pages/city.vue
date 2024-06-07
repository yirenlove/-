<template>
    <div>
        <cityNav ></cityNav>
        <searchCity ref="citySearch"></searchCity>
        <div class="cities-list" ref="citiesList">
            <van-index-bar v-if="cities" :index-list="code">
                <div v-for="item in cities" :key="item.type">
                    <van-index-anchor :index="item.type" />
                    <ul>
                        <li v-for="city in item.list" :key="city.cityId" @click="changeCity(city)">{{ city.name }}</li>
                    </ul>
                </div>
            </van-index-bar>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import cityNav from '@/components/cityNav.vue';
import searchCity from '@/components/searchCity.vue'
import { IndexAnchor, IndexBar } from 'vant';


export default {
    data() {
        return {
            cities: null,
            code: [],
        }
    },
    mounted() {
        axios.get('https://m.maizuo.com/gateway?k=7676858', {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16921931654992916661469185","bc":"440100"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => res.data.data.cities).then(res => {
            let code = []
            let citylist = []
            let letter = []
            for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
                code.push(String.fromCharCode(i))
            }
            code.forEach(item1 => {
                var tem = res.filter(item2 => {
                    return item2.pinyin[0].toUpperCase() == item1
                })
                if (tem.length > 0) {
                    citylist.push({ type: item1, list: tem }),
                        letter.push(item1)
                }

            })
            this.cities = citylist
            this.code = letter

        }).catch(err => { console.log(err); })
        this.$refs.citiesList.style.top = this.$refs.citySearch.height+46+'px'
    },
    components: {
        [IndexAnchor.name]: IndexAnchor,
        [IndexBar.name]: IndexBar,
        cityNav,
        searchCity,
    },
    methods:{
        changeCity(city){
            this.$store.commit('changeCityId',city.cityId)
            this.$store.commit('changeCityName',city.name)
            this.$store.commit('clearCinemaList')
            this.$router.push('films/nowPlaying')
            console.log(this.$store.state);
        }
    }
}

</script>


<style scoped>
.cities-list {
    position: relative;
}
.cities-list ul {
    padding-left: .4rem;
    background-color: #fff;
}

.cities-list li {
    position: relative;
    height: 1.28rem;
    width: 100%;
    font-size: .3733rem;
    line-height: 1.28rem;


}

.cities-list li::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    -ms-transform-origin: 0 100%;
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}
</style>