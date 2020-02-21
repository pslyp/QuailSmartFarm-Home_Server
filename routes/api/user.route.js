module.exports = function(app) {
    const user = require(process.cwd() + '/controllers/api/user.controller')

    const BASE_URL = '/api/v1';

    app.route(BASE_URL + '/user')
        .get(user.getAll)
        .post(user.create);
    app.route(BASE_URL + '/user/:id')
        .get(user.getById)
        .put(user.updateDevice);
    app.post(BASE_URL + '/user/login', user.login);
    
    app.param('id', user.parId);
}