import { post } from '@/plugins/axios';

export function login(data){
    return post(`/api/imApi/userCommon/login?loginName=${data.loginName}&password=${data.password}`, data, {})
}

export function register(data){
    return post(`/api/imApi/userCommon/register?loginName=${data.loginName}&password=${data.password}`, data, {})
}