<template>
    <div ref="test">
        <div class="swiper myswiper">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination">
                123
            </div>




        </div>
    </div>
</template>

<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
export default {
    mounted() {
        new Swiper('.myswiper', {
            // 循环模式选项
            loop: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
            autoplay: {
                delay: 1000,//1秒切换一次
                // 用户操作swiper之后，是否禁止autoplay。
                // disableOnInteraction: false,

            },
        })
    }
}

</script>

<style scoped>


</style>