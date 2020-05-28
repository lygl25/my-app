import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Phaser3Tutorial from '../components/Phaser3Tutorial.vue'
import TutorialContent from "../components/base/TutorialContent";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
        path: '/phaser3Tutorial',
        component: Phaser3Tutorial,
        children:[
        {path: 'TutorialContent/:id',
          component:TutorialContent
        }]
      },
  ],
})
