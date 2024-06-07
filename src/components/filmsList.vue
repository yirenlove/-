<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" offset="20"
        :immediate-check="false">
            <ul class="showItem" v-if="data">
                <li v-for="item in data" :key="item.filmId" @click="getDetail(item.filmId)">
                    <div @click="getDetail(item.filmId)" class="info">
                        <img :src="item.poster" alt="img">
                        <div class="mainInfo">
                            <div class="filmName">
                                <h3>{{ item.name }}</h3>
                            </div>
                            <div class="grade">观众评分: {{ item.grade }}</div>
                            <div class="mainActors">主演：{{ item.actors | actors }}</div>
                            <div class="label"><span>{{ item.nation }}</span> | <span>{{ item.runtime }}分钟</span></div>

                        </div>
                        <slot></slot>
                    </div>
                </li>
            </ul>
        </van-list>
    </div>
</template>

<script>
import { List } from "vant"
import Vue from "vue"
import bus from '@/Bus/bus';
import axios from "axios";
Vue.filter('actors', (actorsArr) => {
    if (actorsArr)
        return actorsArr.map(item => item.name).join(' ')
    else return '暂无主演'
}
)
export default {
    data() {
        return {
            data: null,
            loading: false,
            finished: false,
            pageNum: 1,
            total: 99999,
            isFirst:true
        }
    },
    components: {
        [List.name]: List
    },
    props: {
        'type': {
            type: Number,
            default: 1
        },

    },
    methods: {
        getDetail(id) {
            bus.$emit('ChangeShow', false)
            this.$router.push({
                name: 'info',
                params: {
                    id
                }
            })
        },
        onLoad() {
                if(this.data)
                if (this.data.length < this.total) {
                    this.pageNum++;
                    axios.get(`https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.pageNum}&pageSize=10&type=${this.type}&k=4525701`, {
                        headers: {
                            //携带请求头参数
                            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16921931654992916661469185","bc":"130600"}',
                            'X-Host': 'mall.film-ticket.film.list'
                        }
                    }).then((res) => res.data.data.films).then(res => { this.data.push(...res); this.loading = false; }).catch((err) => { console.log(err); })

                }
                else {
                    this.finished = true
                }
            
        }
    },
    mounted() {
        
        // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=840641A09D2711EBBAEFDF7172CF0F5FC3DD4F7550754A5D83394257B26BFECF&optimus_risk_level=71&optimus_code=10').then((res) => res.data).
        //     then((res) => { console.log(res); }).catch((err) => { console.log(err.message); });
        axios({
            method: 'get',
            url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.pageNum}&pageSize=10&type=${this.type}&k=4525701`,
            headers: {
                //携带请求头参数
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16921931654992916661469185","bc":"130600"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => res.data.data).then(res => { this.data = res.films;this.total = res.total; }).catch((err) => { console.log(err); })
        // console.log(this.$refs.test);
    },
}
</script>


<style scoped>
.showItem {
    margin: .4rem;
}

ul li {
    padding: .4rem 0 0.4rem 0;
}

.showItem .info {
    display: flex;
    align-items: center;
}

ul li img {
    width: 1.76rem;
}

.mainInfo {
    box-sizing: border-box;
    width: calc(100% - 3.0933rem);
    padding: 0 .2667rem;
    /* flex: 1; */
    font-size: 13px;

}

.mainInfo .mainActors {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>