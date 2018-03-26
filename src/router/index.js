import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cars from '@/components/Cars'
import Jobs from '@/components/Jobs'
import Houses from '@/components/Houses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/cars',
      name: "Cars",
      component: Cars
    },

    {
      path: '/jobs',
      name: "Jobs",
      component: Jobs
    },

    {
      path: '/houses',
      name: "Houses",
      component: Houses
    }
  ]
})
