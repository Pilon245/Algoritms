// let counter = 0
// setInterval(() => {
//     counter ++
//     console.log(counter)
// },1000)
const http = require('http')

let requestCount = 0

const server = http.createServer((request , response) => {

    requestCount++

    switch (request.url) {
        case '/student':
            response.write('STUDENTS')
            break;
        case '/':
        case '/cousrse':
            response.write('FRONT + BACK')
            break;
        default:
            response.write('404 not found')

    }

    response.write(' IT-Kamasutra: ' + requestCount)
    response.end()
})

server.listen(3003)