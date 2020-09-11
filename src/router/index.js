import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requireAuth: true //创建权限
        },
        // redirect: '',
        children: [{
            path: '/Investment',
            component: () =>
                import('../views/Childrens/HomeC/Investment.vue')
        },
        {
            path: '/DepositGold',
            component: () =>
                import('../views/Childrens/HomeC/DepositGold.vue')
        },
        {
            path: '/MoneyIn',
            component: () =>
                import('../views/Childrens/HomeC/MoneyIn.vue')
        },
        {
            path: '/Optimization',
            component: () =>
                import('../views/Childrens/HomeC/Optimization.vue')
        },
        {
            path: '/Assembly',
            component: () =>
                import('../views/Childrens/HomeC/Assembly.vue')
        },
        {
            path: '/Insurance',
            component: () =>
                import('../views/Childrens/HomeC/Insurance.vue')
        }
        ]
    },
    {
        path: '/Login',
        name: 'Login',

        component: () =>
            import('../views/Login.vue')
    },
    {
        path: '/Optional',
        name: 'Optional',
        component: () =>
            import('../views/Optional.vue'),
        redirect: '/Optional/Stock',
        children: [{
            path: '/Optional/Stock',
            name: 'Stock',
            component: () =>
                import('../views/Childrens/OptionalC/stock')
        }, {
            path: '/Optional/Fund',
            name: 'Fund',
            component: () =>
                import('../views/Childrens/OptionalC/Fund')
        }]
    },
    {
        path: '/Community',
        name: 'Community',

        component: () =>
            import('../views/Community.vue')
    },
    {
        path: '/Asset',
        name: 'Asset',
        component: () =>
            import('../views/Asset.vue')
    }
]

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => { //挂载全局导航守卫
    if (to.meta.requireAuth) { //判断to.meta.requireAuth是否为true
        if (sessionStorage.getItem("user")) { //判断储存是否有"东西" 如果有保存就继续
            next()
        } else { //没有就跳转到登录页
            next({
                path: '/Login',
                query: { //需要重定向的路由 传参过去
                    redirect: to.fullpath
                }
            })
        }
    } else {
        next()
    }

})

export default router