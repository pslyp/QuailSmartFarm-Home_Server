module.exports = (app) => {
    const verify = require('../configs/verify')
    const user = require('../controllers/api/user.controller')
    const device = require('../controllers/api/device.controller')
    const data = require('../controllers/api/data.controller')
    
    const ROOT = '/api/v1'

    app.get(/api/, verify.authorization)

    app.route(ROOT + '/user')
        .get(user.getAll)
        .post(user.create)
    app.get(ROOT + '/user/:id', user.getById)
    app.post(ROOT + '/user/login', user.login)

    app.param('id', user.parId)


    app.route(ROOT + '/device')
        .get(device.getAll)
        .post(device.create)
    app.route(ROOT + '/device/:token')
        .get(device.getByToken)
        .put(device.updateByToken)


    app.route(ROOT + '/data')
        .get(data.getAll)
        .post(data.create)
    app.route(ROOT + '/data/:token')
        .get(data.getByToken)
        .put(data.updateByToken)
}