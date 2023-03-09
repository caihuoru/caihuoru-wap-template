
const state = {
    avatarUrlStr: '/images/test.png',
    email: '',
    id: '',
    loginName: '',
    phonenumber: '',
    userName: '',
    token: ''
}
 
const getters = {
    token: (state) => {
        return state.token
    },
}
 
const mutations = {
    SET_USER_TOKEN(state, token) {
        state.token = token
    },
    SET_USER_INFO(state, info) {
        console.log(info)
        for (const i in info) {
            if (info[i]) {
                state[i] = info[i]
            }
        }
    },
}
 
const actions = {
     
}
 
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}