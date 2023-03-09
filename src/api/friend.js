import { get, post } from '@/plugins/axios';

export function getFriends(data){
    return get(`/api/imApi/userFriend/getFriends`, data, {})
}

export function addFriend(data){
    return post(`/api/imApi/userFriend/addFriend?toUserId=${data.toUserId}`, data, {})
}

export function authFriend(data){
    // return get(`/api/imApi/userFriend/authFriend`, data, {})
    return post(`/api/imApi/userFriend/authFriend?userFriendId=${data.userFriendId}&status=${data.status}`, data, {})
}