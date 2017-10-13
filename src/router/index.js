import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router);
/* layout */
import Layout from '../views/layout/Layout';
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('error/404'), hidden: true },
  { path: '/401', component: _import('error/401'), hidden: true }
]
export default new Router({
  // mode: 'history', //后端支持可开
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    id:3,
    path: '/introduction',
    component: Layout,
    name: '首页',
    redirect: '/introduction/index',
    icon: 'xinrenzhinan',
    noDropdown: true,
    children: [{ path: 'index', component: _import('introduction/index'), name: '简述',id:31 }]
  },
  {
    id:1,
    path: '/errorpage',
    component: Layout,
    redirect: 'noredirect',
    name: '错误页面',
    icon: '404',
    children: [
      { path: '401', component: _import('error/401'), name: '401',id:11},
      { path: '404', component: _import('error/404'), name: '404',id:12}
    ]
  },
  {
    id:2,
    path: '/sys',
    component: Layout,
    name: '系统管理',
    icon: '404',
    children: [
      { path: 'roleList', component: _import('sys/role'), name: '角色管理',id:21},
      { path: 'addUser', component: _import('sys/user'), name: '用户管理',id:22}
    ]
  }
];
