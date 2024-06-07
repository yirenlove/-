<template>
    <div class="swiper-slide">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'detailItem',
    
}

</script>

<style scoped>
.swiper-slide {
    width: 2.2667rem ;
    min-width: 2.2667rem;
    
}

.swiper-slide img {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.img-container{
    width: 2.2667rem;
    height: 2.2667rem;
    position: relative;
    overflow: hidden;
}

</style>