<template>
    <div class="detail">
        <header v-scroll="50">
            <div class="back" @click="turnBack">
                <van-icon name="arrow-left" class="left" />
            </div>
            {{ dataObj.name }}
        </header>

        <div class="img-wraper">
            <img :src="dataObj.poster" alt="">
        </div>

        <div class="film-detail">
            <div class="col">
                <div class="title">
                    <span class="film-name">{{ dataObj.name }}</span> <span class="film-type" v-if="dataObj.item"> {{
                        dataObj.item.name }} </span>
                </div>
                <div class="film-grade">
                    <span class="grade">{{ dataObj.grade }}</span><span class="grade-text">分</span>
                </div>
            </div>

            <div class="category">
                {{ dataObj.category }}
            </div>
            <div class="premiere">
                {{ dataObj.premiereAt | dataFilter }}
            </div>
            <div class="run-time">
                {{ dataObj.nation }} | {{ dataObj.runtime }}分钟
            </div>
            <div :class="{ 'synopsis': true, 'hide': isShow }" ref="heights">
                {{ dataObj.synopsis }}
            </div>
            <div class="taggle" @click="toggle">
                <van-icon name="arrow-down" size="8px" v-show="isShow" />
                <van-icon name="arrow-up" size="8px" v-show="!isShow" />

            </div>
        </div>
        <div class="actors">
            <div class="actors-title">
                演职人员
            </div>
            <div class="actors-list">
                <detailSwiper :preview="4" v-if="dataObj.actors" names="myactors">
                    <detailSwiperItem v-for="(item, index) in dataObj.actors" :key="index">
                        <div class="img-container"><img :src="item.avatarAddress" alt="img"></div>
                        <div class="actor-name">{{ item.name }}</div>
                        <div class="actor-role">{{ item.role }}</div>
                    </detailSwiperItem>
                </detailSwiper>
            </div>
        </div>
        <div class="photos" :style="{ 'marginTop': '.2667rem', backgroundColor: '#fff','marginBottom':'1.6rem' }">
            <div class="photos-title" style="height: 1.6533rem;">
                <span class="title-text">剧照</span>
                <span class="to-all" v-if="dataObj.photos">全部({{ dataObj.photos.length }})></span>
            </div>
            <div>
                <detailSwiper :preview="2.3" v-if="dataObj.photos" names="myphotos">
                    <detailSwiperItem v-for="(item, index) in dataObj.photos" :key="index">
                        <div class="img-container myphoto-container" @click="handleClick(index)"><img :src="item" alt="img">
                        </div>
                    </detailSwiperItem>
                </detailSwiper>
            </div>
        </div>
        <div class="bottom-buy" >
            选座购票
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import bus from '@/Bus/bus';
import moment from 'moment'
import Vue from 'vue';
import { Icon, ImagePreview } from 'vant';
import detailSwiperItem from '@/components/detailSwiperItem.vue';
import detailSwiper from '@/components/detailSwiper.vue';

Vue.filter('dataFilter', (data) => {
    return moment(data * 1000).format('YYYY-MM-DD') + '上映'
})
export default {
    data() {
        return {
            dataObj: {},
            isShow: true
        }
    },
    directives: {
        'scroll': {
            inserted(el, binding) {
                window.addEventListener('scroll', () => {
                    if ((document.documentElement.scrollTop || document.body.scrollTop) >= binding.value) {
                        el.classList.add('header-show')
                    }
                    else {
                        el.classList.remove('header-show')
                    }
                })

            }
        }
    },
    mounted() {
        axios.get(`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=6082134`, {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16921931654992916661469185","bc":"130600"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then((res) => res.data.data.film).then((res) => { this.dataObj = res })
    },
    methods: {
        turnBack() {
            this.$router.back()
        },
        toggle() {
            this.isShow = !this.isShow
            if (!this.isShow)
                this.$refs.heights.style.height = this.$refs.heights.scrollHeight + 'px'
            else {
                this.$refs.heights.style.height = '1.0133rem'
            }
        },
        handleClick(index) {
            ImagePreview({
                images: this.dataObj.photos,
                startPosition: index,
                showIndex: true,
                closeable: true,
            })
        }
    },
    beforeDestroy() {
        bus.$emit('ChangeShow', true)
    },
    components: {
        [Icon.name]: Icon,
        detailSwiper,
        detailSwiperItem,
        [ImagePreview.name]: ImagePreview,
    }
}
</script>

<style scoped>
header {
    width: 100%;
    height: 1.1733rem;
    position: fixed;
    text-align: center;
    line-height: 1.1733rem;
    font-size: .4533rem;
    color: transparent;
    background-color: transparent;
    z-index: 1;
    transition: all .3s ease;
}
.header-show {
    color: #191a1b;
    background-color: #fff;
}
header .back {
    position: absolute;
    height: .8rem;
    width: .8rem;
    top: .16rem;
    left: .16rem;
    line-height: .8rem;
    background-color: #fff;
    border-radius: 15px;
    color: #191a1b;
}

header .back .left {
    font-size: 16px;
    margin: auto;
}

.detail {
    position: relative;
}

.img-wraper {
    position: relative;
    height: 56vw;
    overflow: hidden;
}

.img-wraper img {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}

.film-detail {
    /* width: 100%; */
    padding: .4rem;
    padding-top: .32rem;
    background-color: #fff;
}

.col {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.col .title {
    width: 6.8267rem;
    /* text-align: center; */
    /* line-height: .64rem; */
}

.film-name {
    display: inline-block;
    height: .64rem;
    vertical-align: middle;
    line-height: .64rem;
    color: #191a1b;
    font-size: .48rem;
}

.film-detail .film-type {
    display: inline-block;
    height: .3733rem;
    line-height: .3733rem;
    font-size: 10px;
    color: #fff;
    background-color: #d2d6dc;
    vertical-align: top;
    margin-left: .1867rem;
    padding: 0 .0533rem;
}

.film-grade {
    width: calc(100% - 250px);
    color: #ffb232;
    text-align: right;

}

.film-grade .grade {
    font-size: .48rem;
    font-style: italic;
    line-height: 1.5;
}

.film-grade .grade-text {
    font-size: 12px;
}

.category,
.premiere,
.run-time,
.synopsis {
    font-size: .3467rem;
    color: #797d82;
    margin-top: .1333rem;
}

.synopsis {
    margin-top: .32rem;
    transition: height 0.5s ease;
}

.taggle {
    width: .5333rem;
    height: auto;
    margin: auto;
    text-align: center;
}

.hide {
    overflow: hidden;
    height: 1.0133rem;
}

.actors {
    margin-top: .4rem;
    background-color: #fff;
}

.actors .actors-title {
    padding: .4rem;
    font-size: .4267rem;
}

.actor-name {
    padding-top: .2667rem;
    font-size: .2667rem;
    text-align: center;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.actor-role {
    font-size: .2667rem;
    text-align: center;
    color: #797d82;
}

.photos-title {
    height: 1.6533rem;
    /* width: 100%; */
    padding: 15px;
    box-sizing: border-box;
}

.photos-title span {
    display: inline-block;
    height: .5867rem;
    line-height: .5867rem;
}

.to-all {
    float: right;
    font-size: 13px;
    color: #797d82;
}

.myphoto-container {
    width: 4rem;
    height: 2.6667rem;
}
.bottom-buy {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1.3333rem;
    width: 100%;
    line-height: 1.3333rem;
    text-align: center;
    font-size: .4267rem;
    background-color: #ff5f16;
    color: #fff;
    z-index: 1;
}

</style>