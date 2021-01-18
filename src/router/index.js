import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import MyMain from '../components/myMain.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Text from '../components/text.vue'
import Canvas from '../views/canvas.vue'
import MyCanvas from '../components/MyCanvas.vue'
import TabOne from '../components/TabOne.vue'
import TabTwo from '../components/TabTwo.vue'
import TabThree from '../components/TabThree.vue'
import TabFour from '../components/TabFour.vue'
import TabFive from '../components/TabFive.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components:{default:Home,h:HelloWorld,t:Text}
    // children:[{
    //   path:'/myMain',component:MyMain,children:[
    //     {
    //       path:'hello',component:HelloWorld
    //     }
    //   ]
    // }]
  },
  { 
    path:'/canvas',
    component:Canvas,
    children:[
      {
        // ,one:TabOne,two:TabTwo,three:TabThree
        path:'mycanvas',
        name:'mycanvas',
        components:{default:MyCanvas},
        children:[
          {
            path:'one',
            name:'one',
            component:TabOne
          },
          {
            path:'two',
            name:'two',
            component:TabTwo
          },
          {
            path:'three',
            name:'three',
            component:TabThree
          },
          {
            path:'four',
            name:'four',
            component:TabFour
          },
          {
            path:'five',
            name:'five',
            component:TabFive
          },
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
