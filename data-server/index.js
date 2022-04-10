const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db-dev.json')
const middlewares = jsonServer.defaults()
const {v4: uuidv4} = require('uuid')

const db = router.db
let currentUser = undefined

const authFilter = (req, res, next) => {
    if (isAuthorized(req)) {
        res.header('Access-Control-Allow-Origin', '*');
        next()
    } else {
        res.sendStatus(401)
    }
}

const isAuthorized = (req) => {
    if (req.originalUrl.startsWith('/api/1.0/login')) {
        return true
    }
    const sessionGuid = req.headers['with-credential']
    if (!sessionGuid) {
        return false
    }
    const session = db.get('sessions').find({sessionGuid: sessionGuid}).value()
    if (!session) {
        return false
    }
    const user = db.get('users').find({id: session.userId}).value()
    if (!user) {
        return false
    }
    currentUser = user
    return true
}

const authMe = (req, res) => {
    res.status(200).jsonp(currentUser)
}

const login = (req, res) => {
    const user = db.get('users').find({username: req.body.username}).value()
    if (!user) {
        res.status(403).json({error: 'Invalid username'})
    } else if (user.password !== req.body.password) {
        res.status(403).json({error: 'Invalid password'})
    } else {
        let session = db.get('sessions').find({userId: user.id}).value();
        if (!session) {
            session = {
                userId: user.id,
                sessionGuid: uuidv4(),
                created: new Date()
            }
            db.get('sessions').value().push(session)
            db.write()
        }
        res.status(200).json(session)
    }
}

const logout = (req, res) => {
    const sessions = db.get('sessions').value()
    const index = sessions.findIndex(s => s.userId === currentUser.id);
    if (index > -1) {
        sessions.splice(index)
        db.write()
    }
    res.status(200).json({})
}

const follow = (req, res) => {
    const userId = parseInt(req.params.userId)
    const result = setFollowed(userId, true)
    res.status(200).json({success: result})
}

const unfollow = (req, res) => {
    const userId = parseInt(req.params.userId)
    const result = setFollowed(userId, false)
    res.status(200).json({success: result})
}

const setFollowed = (userId, followed) => {
    const index = currentUser.followed.indexOf(userId)
    if (followed) {
        if (index === -1) {
            currentUser.followed.push(userId)
            db.write()
        }
    } else {
        if (index > -1) {
            currentUser.followed.splice(index, 1)
            db.write()
        }
    }
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(authFilter)
server.post('/api/1.0/login', login)
server.get('/api/1.0/logout', logout)
server.get('/api/1.0/auth/me', authMe)
server.post('/api/1.0/follow/:userId', follow)
server.post('/api/1.0/unfollow/:userId', unfollow)
server.use(jsonServer.rewriter({
    '/api/1.0/*': '/$1'
}))
server.use(router)
server.listen(9000, () => {
    console.log('JSON Server is running')
})
