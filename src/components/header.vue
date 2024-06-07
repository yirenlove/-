<template>
    <div class="nav" ref="nav" v-scroll="300">
        <header >
            <div id="left" @click="handleLeft">北京<van-icon name="arrow-down" size="12" /></div>
            <div id="city">
                    电影
            </div>
            <div id="right">

            </div>
        </header>
        <ul>
            <li><router-link :to="{
                name: 'nowplaying',

            }"><span>正在热映</span></router-link></li>
            <li><router-link :to="{
                name: 'commingsoon',
            }"><span>即将上映</span></router-link></li>
        </ul>

    </div>
</template>

<script>
import { Icon } from 'vant';
export default {
    name: 'myheader',
    directives: {
        'scroll': {
            inserted(el, binding) {
                window.fn = function (){
                    if ((document.documentElement.scrollTop || document.body.scrollTop) >= binding.value) {
                        el.style.position = 'fixed';
                        el.style.top = 0;
                        document.querySelector('.nowplay').style.top = '1.1733rem'

                        el.children[0].style.display = 'flex'
                        // this.show = true
                    }
                    else {
                        el.style.position = 'relative';
                        el.children[0].style.display = 'none'
                        document.querySelector('.nowplay').style.top = '0'
                    }
                }
                window.addEventListener('scroll', fn)

            },
            unbind(){
                removeEventListener('scroll',fn)
                // document.querySelector('.nowplay').style.top = '0'
            }
        }
    },
    components:{
        [Icon.name]:Icon
    },
    methods:{
        handleLeft(){
            this.$router.push('/city')
        }
    }
}
</script>

<style scoped>
.nav {
    width: 100%;
    background-color: #fff;
    z-index: 999;
}

header {
    /* width: 100%; */
    height: 1.1733rem;
    padding:0 .4rem;
    display: none;
    line-height: 1.1733rem;
}
#left {
    min-width: 15%;
    line-height: 1.1733rem;
    text-align: center;
    font-size: 13px;
}
#city {
    flex: 1;
    font-size: .4533rem;
    text-align: center;
}
#right {
    width: 15%;
}
ul {
    display: flex;
    justify-content: space-between;
    height: 100%;
    z-index: 999;
}

ul li {
    list-style: none;
    flex: 1;
    text-align: center;
    line-height: 1.3333rem;
}

a {
    text-decoration: none;
}
</style>