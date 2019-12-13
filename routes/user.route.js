module.exports = function(app) {
    const user = require('../controllers/api/user.controller')

    const BASE_URL = '/api/v1';

    app.route(BASE_URL + '/user')
        .get(user.getAll)
        .post(user.create);
    app.route(BASE_URL + '/user/:id')
        .get(user.getById);
    app.post(BASE_URL + '/user/login', user.login);
    
    app.param('id', user.parId);
}