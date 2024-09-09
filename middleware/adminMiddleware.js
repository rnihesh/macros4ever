const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401).json({ message: 'Unauthorized, not admin' });
    }
}

module.exports = admin;