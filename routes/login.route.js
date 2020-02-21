module.exports = function(app) {
    const login = require('../controllers/login.controller');
    
    app.route('/login')
        .get(login.render);
};