
const state = {
    searcHistroy: []
}
 
const getters = {
    searcHistroy: (state) => {
        return state.searcHistroy
    },
}
 
const mutations = {
    SET_SEARCH_HISTROY(state, histroy) {
        if (!state.searcHistroy.includes(histroy)) {
            const searcHistroy = JSON.parse(JSON.stringify(state.searcHistroy))
            searcHistroy.unshift(histroy)
            state.searcHistroy = searcHistroy.slice(0, 9)
            console.log(state.searcHistroy, searcHistroy)
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