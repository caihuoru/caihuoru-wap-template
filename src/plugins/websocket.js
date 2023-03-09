
const createSocket = (userId) => {
    const ws = new WebSocket(`ws://websocket/login/${userId}`);

    ws.onopen = function(){
        ws.send('雞你太美');
    }

    ws.onmessage = function(msg){
        try {
            const data = JSON.parse(msg.data)
            console.log(data)
        } catch(err) {
            console.log(err)
        }
        
    }
}
export {
    createSocket,
}