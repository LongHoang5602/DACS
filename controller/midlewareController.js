const jwt = require("jsonwebtoken");

const middlewareController = {
    //verifyToken
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        } else {
            return res.status(401).json("You're not authenticated");
        }
    },

    verifyTokenAndAdminAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if (req.user.id === req.params.id || req.user.admin) {
                next();
            } else {
                return res.status(403).json("You're not allowed to delete other");
            }
        });
    },
    getUserIdFromToken: (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, decoded) => {
                if (err) {
                    return res.sendStatus(403); // Không đúng token hoặc hết hạn
                }
                req.userId = decoded.id; // Lưu userId vào trong req để sử dụng ở các route khác
                next();
            });
        } else {
            res.sendStatus(401); // Không tồn tại token trong header
        }
    }
};

module.exports = middlewareController;