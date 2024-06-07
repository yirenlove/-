<template>
    <div>
        <filmsList :type="2">
            <div class="reserve">预约</div>
        </filmsList>
    </div>

</template>

<script>
import filmsList from '@/components/filmsList.vue';

export default {
    components:{
        filmsList,
    },

}
</script>

<style scoped>
.reserve {
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
.reserve::after {
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