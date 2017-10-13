import { asyncRouterMap, constantRouterMap } from 'src/router'
import { getRoleResource } from 'api/sys';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  return roles.some((item) => {
    return item == route.id;
  });
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve, reject)=> {
        const { roles } = data
        let accessedRouters;
        console.log(roles.id)
        getRoleResource(roles.id).then(response => {
          accessedRouters = filterAsyncRouter(asyncRouterMap,response.data);
          commit('SET_ROUTERS', accessedRouters);
          console.log(accessedRouters)
          resolve(response);
        }).catch(err => {
          reject(err);
        });
      })
    }
  }
};

export default permission;
