const admin = require('./admin')

module.exports = app => {
    app.post('/login', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
    app.post('/signup', app.api.auth.save)



}