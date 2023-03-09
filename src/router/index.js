import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store';

Vue.use(Router);
// 解决报错
const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace
// push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
Router.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/layout'),
    redirect: '/mine',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/view/home'),
        meta: {
          title: '我的',
          index: 1
        }
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/view/message'),
        meta: {
          title: '我的',
          index: 2
        }
      },
      {
        path: '/wallet',
        name: 'wallet',
        component: () => import('@/view/wallet'),
        meta: {
          title: '我的',
          index: 3
        }
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/service'),
        meta: {
          title: '我的',
          index: 4
        }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/view/mine'),
        meta: {
          title: '我的',
          fade: true
        }
      }
    ],
    meta: {
      index: 0,
    },
  },
  //   path: '/contacts',
  //   name: 'contacts',
  //   component: () => import('@/view/contacts'),
  //   meta: {
  //     title: '',
  //     fade: true
  //   }
  // },
];

const router = new Router(
  { 
    routes,
    mode: 'hash',
  });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
  
});


export default router
