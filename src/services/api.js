import request from '../utils/request';
//用户登陆ok
export async function goLogin(params) {
  return request({//将数据结果返回
    url: 'http://192.168.130.158:3001/serchfile',
    method: 'get',
    data : params
  });
}
