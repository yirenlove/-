<template>
    <div>
        <cinemaNav></cinemaNav>
        <cinemaList></cinemaList>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '@/components/tabbar.vue'
import cinemaList from '@/components/cinemaList.vue';
import cinemaNav from '@/components/cinemaNav.vue';
export default {
    data(){
        return {
            cinemas:[]
        }
    },
    components: {
    tabbar,
    cinemaList,
    cinemaNav,
},
}
</script>

<style scoped>

</style>