const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db-dev.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/1.0/auth/me': '/auth',
    '/api/1.0/*': '/$1'
}))
server.use(router)
server.listen(9000, () => {
    console.log('JSON Server is running')
})

