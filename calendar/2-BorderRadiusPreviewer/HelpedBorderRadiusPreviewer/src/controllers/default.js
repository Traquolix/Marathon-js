module.exports.index = function(req, res) {
    // render index.jade (without directory because of aliases)
    res.render('index');
};