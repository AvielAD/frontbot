import io from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_URL_REAL,{
    autoConnect: true
});

export default socket;