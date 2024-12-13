// Middleware for handling auth
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../index");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decoded = jwt.verify(jwtToken, JWT_SECRET);
    if (decoded.username) {
        next();
    } else {
        return res.status(403).json({
            msg: "you are not authenticated",
        });
    }
}

module.exports = adminMiddleware;
