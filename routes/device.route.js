module.exports = function(app) {
    const device = require('../controllers/api/device.controller');

    const BASE_URL = '/api/v1';

    app.route(BASE_URL + '/device')
        .get(device.getAll)
        .post(device.create);
    app.route(BASE_URL + '/device/:token')
        .get(device.getByToken)
        .put(device.insert);

};