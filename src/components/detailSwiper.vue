<template>
  <div class="swiper" :class="names">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
export default {
  components: {

  },
  props: {
    names: {
      tpye: String,
      default: 'mySwiper'
    },
    preview: {
      tpye: Number,
      default: 3
    }
  },
  mounted() {
    
    new Swiper('.' + this.names, {
      slidesPerView: this.preview,
      spaceBetween: 10,
      freeMode: true,
    })
  },
}
</script>

<style scoped>
.swiper-container {
  padding-left: .4rem;
}
</style>