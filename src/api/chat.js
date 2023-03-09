import { get, post } from '@/plugins/axios';

export function findUser(data){
    return get(`/api/imApi/msg/list?toUserId=2&pageNum=1&pageSize=10`, data, {})
}

export function sendMsg(data){
    return post(`/api/imApi/websocket/send`, data, {})
    
}