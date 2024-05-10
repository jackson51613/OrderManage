import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ManageView',
    component: () => import('../views/ManageView.vue'),
    //重定向
    redirect: '/user',
    children: [
      { path: 'user', name: "User", component: () => import('../views/User.vue') ,props: true},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
