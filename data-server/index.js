const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db-dev.json')
const middlewares = jsonServer.defaults()

const db = router.db
const defaultAuthId = 12
const currentUser = db.get('users').find({id: defaultAuthId}).value()

const isAuthorized = (req) => {
    if (req.originalUrl.startsWith('/api/1.0/users')) {
        return true
    }
    return req.headers['with-credential'] === 'true'
}

server.use(middlewares)
server.use((req, res, next) => {
    if (isAuthorized(req)) {
        res.header('Access-Control-Allow-Origin', '*');
        next()
    } else {
        res.sendStatus(401)
    }
})

server.get('/api/1.0/auth/me', (req, res) => {
    res.status(200).jsonp(currentUser)
})

server.use(jsonServer.rewriter({
    '/api/1.0/*': '/$1'
}))
server.use(router)
server.listen(9000, () => {
    console.log('JSON Server is running')
})
