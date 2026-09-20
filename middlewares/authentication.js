const { validateToken } = require('../services/authentication');

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue) return next();

        try {
            req.user = validateToken(tokenCookieValue);
        } catch (error) {
            res.clearCookie(cookieName);
        }

        return next();
    };
}

function requireAuthentication(req, res, next) {
    if (!req.user) return res.redirect('/user/signin');
    return next();
}

module.exports = { checkForAuthenticationCookie, requireAuthentication };
