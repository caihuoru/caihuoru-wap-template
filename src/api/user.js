import { get } from '@/plugins/axios';

export function userInfo(data){
    return get(`/api/imApi/user/info`, data, {})
}