import { get } from '@/plugins/axios';

export function userInfo(data){
    return get(`/api/imApi/user/info`, data, {})
}

export function findUser(data){
    return get(`/api/imApi/user/findUser`, data, {})
}