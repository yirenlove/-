import VueRouter from "vue-router";
import commingSoon from '@/pages/commingSoon'
import nowPlaying from '@/pages/nowPlaying.vue'
import cinema from '@/pages/cinema.vue'
import center from '@/pages/center.vue'
import films from '@/pages/films'
import search from '@/components/search'
import detail from '@/pages/detail'
import city from '@/pages/city.vue'
export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/films',
            component:films,
            children:[
                {
                    name:'nowplaying',
                    path:'nowPlaying',
                    component:nowPlaying,
                },
                {
                    name:'commingsoon',
                    path:'commingSoon',
                    component:commingSoon
                },
                // {
                //     name:'info',
                //     path:':id',
                //     component:detail
                // }
            ]
        },
        {
            name:'info',
            path:'/films/:id',
            component:detail,
        },
        {
            path:'/cinema',
            component:cinema,
            
        },
        {
            path:'/cinema/search',
            component:search
        },
        {
            path:'/city',
            component:city,
        },
        {
            path:'/center',
            component:center
        },
        {
            path:'*',
            redirect:'/films'
        }
        
    ]
})