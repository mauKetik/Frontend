const express = require('express')


const app = express()


app.use(express.json())

const PORT = 3000

const http = require('http')
const socketIo = require('socket.io')

const server = http.createServer(app)


const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173"
      }
})

io.on('connection', (socket) => {
    console.log(`io connected!`);
    socket.on('userTyping', (typing) => {
        console.log('masuk!!!!!');
        console.log(typing, 'masuk');
    })
    socket.on('typingValue', (typingVal) => {
        console.log('typing valyue');
        console.log(typingVal, 'masukVal');
        socket.broadcast.emit('typingValue', typingVal)
    })

})

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})



module.exports = app