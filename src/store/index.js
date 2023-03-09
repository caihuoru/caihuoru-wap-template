import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import friend from './friend'
import chat from './chat'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        friend,
        chat
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        key: 'jstx',
        reducer(val){
            return {
                user: val.user,
                friend: val.friend,
                chat: val.chat
            }
        }
    })]
});