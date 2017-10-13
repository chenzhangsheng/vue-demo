import { param2Obj } from 'utils';
const roleList = [
  {"id":1,"delFlag":0,"parentId":null,"sort":0,"name":"超级管理员","enName":"super_manager","usable":"1","remarks":"","children":[]},
  {"id":2,"delFlag":0,"parentId":null,"sort":1,"name":"客服主管","enName":"server_manager","usable":"1","remarks":"","children":[]}
];
const ResourceList = [
  {"id":1, "resource":[
    { id:1, path: '/errorpage',name: '错误页面',},
    { id:11,path: '401', name: '401' },
    { id:12,path: '404', name: '404' },
    { id:2,path: '/sys', name: '系统管理' },
    { id:21,path: 'roleList', name: '角色管理'},
    { id:3,path: '/introduction', name: '简述'},
    { id:31,path: 'index', name: '简述'},
    { id:22,path: 'addUser', name: '用户管理',}
  ]},
  {"id":2, "resource":[
    { id:1, path: '/errorpage',name: '错误页面',},
    { id:11,path: '401', name: '401' },
    { id:12,path: '404', name: '404' },
    { id:3,path: '/introduction', name: '简述'},
    { id:31,path: 'index', name: '简述'},
  ]}
]

export default {
  getRoleList: () => roleList,
  getResource:config =>{
    const { id } = param2Obj(config.url);
    let arr = [];
    let RoleRes = ResourceList.filter(item => {
      if(item.id == id)
        return true;
      else
        return false;
    })
    for(let i=0;i<RoleRes[0].resource.length;i++){
      arr.push(RoleRes[0].resource[i].id);
    }
    // for(let a of RoleRes[0].resource.values()){
    //   arr.push(a.id);
    // }
    return arr;
  }
};




