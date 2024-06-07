<template>
    <div>
        个人中心待开发
        <tabbar></tabbar>
    </div>
</template>

<script>

import tabbar from '@/components/tabbar.vue'
    
export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
        };
    },
    components: {
        tabbar
    },
    methods: {
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },
    },
};

</script>

<style>


</style>