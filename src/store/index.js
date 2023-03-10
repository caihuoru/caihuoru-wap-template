import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        key: 'jq',
        reducer(val){
            return {
                user: val.user,
            }
        }
    })]
});