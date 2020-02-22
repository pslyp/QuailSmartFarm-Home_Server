module.exports = (app) => {
    const user = require('../controllers/api/user.controller')
    const device = require('../controllers/api/device.controller')

    const ROOT = '/api/v1'

    app.route(ROOT + '/user')
        .get(user.getAll)
        .post(user.create)
    app.get(ROOT + '/user/:id', user.getById)

    app.param('id', user.parId)


    app.route(ROOT + '/device')
        .get(device.getAll)
        .post(device.create)
}