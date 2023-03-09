
import store from "@/store"
const state = {
    chatList: []
}
 
const getters = {
    chatList: (state) => {
        return state.chatList
    },
    newsList: (state) => {
        const list = []
        state.chatList.map(item => {
            const userIndex = list.findIndex(e => {
                return item.userId == e.userId
            })
            const toUserIndex = list.findIndex(e => {
                return item.toUserId == e.userId
            })
            if (userIndex == -1) {
                list.push({
                    lastMsg: item.msg,
                    avatar: item.avatar,
                    userId: item.userId,
                    userName: item.userName,
                })
            }
            if (toUserIndex == -1) {
                list.push({
                    lastMsg: item.msg,
                    avatar: item.avatar,
                    userId: item.toUserId,
                    userName: item.toUserName,
                })
            }

            if (userIndex != -1 || toUserIndex != -1) {
                list.map (e => {
                    if (e.userId == item.toUserId || e.userId == item.userId) {
                        e.lastMsg = item.msg
                    }
                    return
                })
                
            }
        })
        return list.filter(item => {
            return store.state.user.id != item.userId
        })
    },
}
 
const mutations = {
    SET_CHAT_LIST(state, chat) {
        state.chatList.push(chat)
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