import axios from "axios"
import { Toast } from "vant";
import router from "@/router";
import store from "@/store";
const request = axios.create({
    timeout: 30000,
    baseURL: '',
});
request.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
request.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
request.defaults.headers.post["Cache-Control"] = "no-cache";
request.defaults.headers.post["pragma"] = "no-cache";
//请求添加token
request.interceptors.request.use((request) => {
    // 登陆初始化判断参数
    console.log(request.url)
    if (!request.url.includes('login') || !request.url.includes('register')){
        const user = store.state.user
        request.headers['token'] = user.token || ''
    }
    return request;
})

//登录过期跳转 TODO
request.interceptors.response.use(response => {
    return response;
}, err => {
    // err.response 如果存在
    if (err.response) {
        return Promise.reject(err.response)
    }
  
    return Promise.reject(err)
})

request.interceptors.response.use((response) => {
    const data = response.data;
    //拦截所有错误的状态
    if (data && !data.code){
        return data
    } else {
        if (data) {
            /* 请先登录 */ 
            if (data.code === 601) {
                router.replace({
                    path: '/login'
                })
                return Promise.reject(data?.msg || '请先登录')
            }
            /* token无效 */ 
            if (data.code === 403) {
                router.replace({
                    path: '/login'
                })
                return Promise.reject(data?.msg || 'token无效')
            }
            return Toast.fail(data?.msg)
        } else {
            return data
        }
    }
    
}, err => {
    // const {
    //     response
    // } = err;
    const response = err
    if (err && response) {
        console.log(response.status)
        switch (response.status) {
            case 400:
                Toast.fail('错误请求');
                break;
            case 401:
                // Toast.fail('未登录');
                break;
            case 403:
                Toast.fail('未授权接口！');
                break;
            case 404:
                Toast.fail('请求错误,未找到该资源');
                break;
            case 405:
                Toast.fail('请求方法未允许');
                break;
            case 408:
                Toast.fail('请求超时');
                break;
            case 500:
                Toast.fail('服务器端出错');
                break;
            case 501:
                Toast.fail('网络未实现');
                break;
            case 502:
                Toast.fail('网络错误');
                break;
            case 503:
                Toast.fail('服务不可用');
                break;
            case 504:
                Toast.fail('网络超时');
                break;
            case 505:
                Toast.fail('http版本不支持该请求');
                break;
            default:
                Toast.fail('连接错误!错误码：' + response.status);
        }
    }
    if (err.code == 'ECONNABORTED') {
        Toast.fail('请求超时!刷新重试。')
    }
    // 将异常抛出
    return Promise.reject(err)
})

export function post(url, data, otherConfig) {
    return request.post(url, data, otherConfig);
}
export function get(url, data, otherConfig) {
    return request.get(url, { params: data, ...otherConfig });
}
export function patch(url, data, otherConfig) {
    return request.patch(url, data, otherConfig);
}
export function put(url, data, otherConfig) {
    return request.put(url, data, otherConfig);
}
export function del(url, data) {
    return request.delete(url, data);
}