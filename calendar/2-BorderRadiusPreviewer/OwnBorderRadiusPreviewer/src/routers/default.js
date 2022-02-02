let controller = require('./../controllers/default');
// Inject express's router
module.exports = function(router) {
    // Create a route on URL : "/"
    // This route will call index
    router.get('/', controller.index);
};