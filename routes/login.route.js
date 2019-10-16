module.exports = function(app) {
    const login = require('../controllers/login.controller');
    const apiLogin = require('../controllers/api/login.controller');
    
    app.route('/login')
        .post(login.render);

    app.post('/user/login', apiLogin.login);
};