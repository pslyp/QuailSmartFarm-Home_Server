module.exports = function(app) {
    var path = require('path');

    app.set('views', path.join(process.cwd(), '/views'));
    app.set('view engine', 'ejs');
    app.set('view options', { delimiter: '?' });
};