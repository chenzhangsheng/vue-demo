import fetch from 'utils/fetch';

export function getRoleList() {
  return fetch({
    url: '/role/list',
    method: 'get'
  });
}

export function getRoleResource(id) {
  return fetch({
    url: '/role/resource',
    method: 'get',
    params: {id}
  });
}

export function updateRoleResource(id,reList) {
  const data = {
    id,
    reList
  };
  return fetch({
    url: '/role/update',
    method: 'post',
    data
  });
}

