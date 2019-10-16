exports.render = function(req, res) {
    res.render('index', { 
        page: "Home",
        title: "Hello Node JS" 
    });
};