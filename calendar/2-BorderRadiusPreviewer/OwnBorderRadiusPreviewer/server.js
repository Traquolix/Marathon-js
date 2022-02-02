/*
 * Context : 30 days of JS - Marathon.
 * Version : My own, with my brain and nothing else except basic documentation.
 * Subject : https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md
 * TL;DR : Visualisation of border radius chosen by user + generation of CSS/Possibility to copy CSS.
 */


// We need our configurations
let app = require('./bin/express')();
let router = require('./bin/express-router')();
// We call our routes
require('./src/routers/default')(router);
// Then tell express to use our router
app.use('/', router);
// Start the server on port 8080
app.listen(8080);
console.log('Server launched on port 8080');