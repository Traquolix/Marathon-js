let express = require('express');
module.exports = function() {
    let app = express();
    // Add Jade to Express + directoy of views
    app.set('view engine', 'jade');
    app.set('views', './public/views');
    // Define alias for assets
    app.use('/css', express.static('./public/css'));
    app.use('/js', express.static('./public/js'));
    app.use('/img', express.static('./public/img'));
    return app;
};