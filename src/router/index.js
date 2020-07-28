import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/login.vue'
import Signup from '../components/signup.vue'
import Forgetpassword from '../components/forgetpassword'
import Userprofile from '../components/userprofile'




Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
    path:'/forgetpassword',
    name: 'forgetpassword',
    component: Forgetpassword
  },
  {
    path:'/userprofile',
    name: 'userprofile',
    component:Userprofile
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
   {
    path: '/signup',
    name: 'Signup',
    component:Signup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
