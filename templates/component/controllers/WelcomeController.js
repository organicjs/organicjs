/**
 * Renders the 'welcome.html' view passing it the required data.
 */
module.exports.home = function(req, res, next) {
    res.render('welcome', {data: 'OrganicJS'});
};