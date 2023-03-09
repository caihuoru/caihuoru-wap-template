import io from 'socket.io-client';

let socketIO = null;
const createSocket = (userId) => {
    socketIO = io('', {
        path: `/api/imApi/websocket/login/${userId}`,
        transports: ['websocket']
    })
    socketIO.on("connect", function () {
        // socketIO.emit('connectWho', {
        //     token: '',
        // })
    })
    socketIO.on("msg", function (data) {
        console.log(data)
    })
}
export {
    createSocket,
}