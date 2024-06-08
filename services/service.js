// service.js

import { Server } from 'socket.io';

const initSocketIO = (server) => {
    const io = new Server(server);

    const publicRoom = 'public-room'; // Define the public room name

    io.on('connection', (socket) => {
        const name = socket.handshake.query.name;
        console.log('A new user connected:', name);

        // Automatically join the public room on connection
        socket.join(publicRoom);
        console.log(`${name} joined the public room: ${publicRoom}`);

        // Handle disconnect event
        socket.on('disconnect', () => {
            console.log(`${name} disconnected`);
        });

        // Handle other custom events if needed
        socket.on('message', (message) => {
            console.log(`Message from ${name}: ${message}`);
            // Broadcast the message to the public room
            io.to(publicRoom).emit('message', { user: name, message });
        });

    });

    return io;
};

export default initSocketIO;
