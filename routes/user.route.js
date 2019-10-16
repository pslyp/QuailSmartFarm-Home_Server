module.exports = function(app) {
    const user = require('../controllers/api/user.controller')

    app.route('/api/user')
        .get(user.findAll)
        .post(user.create);

}