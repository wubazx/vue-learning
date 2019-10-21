import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import NotFound from '../views/NotFound'

//用于嵌套的路由组件
import NewBlog from '../views/blog/NewBlog'
import BLogList from '../views/blog/BlogList'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      //配置嵌套路由
      children: [
        {path: '/blog/newBlog',component: NewBlog},
        {path: '/blog/blogList/:id',name: 'BlogList',component: BLogList,props: true}
      ]
    },

    //演示重定向，不用单独的组件
    {
      path: '/goHome1',
      redirect: '/main'
    },
    //带参数的重定向
    {
      path: '/goHome2/:username',
      redirect: '/main'
    },

    //404设置
    {
      path: '*',
      component: NotFound
    }
  ]
})
