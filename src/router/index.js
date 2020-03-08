import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import About from '@/components/About'
import LayoutWorks from '@/components/layouts/Works'
import WorksTop from '@/components/WorksTop'
import WorksDetail from '@/components/WorksDetail'
import Contact from '@/components/Contact'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/portfolio',
      name: 'Top',
      component: Top
    },
    {
      path: '/portfolio/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio/works',
      component: LayoutWorks,
      children: [
        {
          path: '/portfolio',
          name: 'Works',
          component: WorksTop
        },
        {
          path: ':slug',
          name: 'WorksDetail',
          component: WorksDetail
        }
      ]
    },
    {
      path: '/portfolio/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'Not Found',
      component: PageNotFound,
      title: 'Not Found'
    }
  ],
  scrollBehavior(savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
