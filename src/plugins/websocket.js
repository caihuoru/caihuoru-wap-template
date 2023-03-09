
import store from '@/store';
const createSocket = (userId) => {
    const ws = new WebSocket(`ws://47.104.172.64:8281/imApi/websocket/login/${userId}`);

    ws.onopen = function(){
        ws.send('鸡你太美');
    }

    ws.onmessage = function(msg){
        try {
            const data = JSON.parse(msg.data)
            const chat = {
                msg: data.content,
                userId: data.fromUserId,
                toUserId: data.toUserId,
                avatar: data.avatar || '',
                userName: data.fromUserName,
                toUserName: data.toUserName,
            }
            store.commit('chat/SET_CHAT_LIST', chat)
        } catch(err) {
            console.log(err)
        }
        
    }
}
export {
    createSocket,
}