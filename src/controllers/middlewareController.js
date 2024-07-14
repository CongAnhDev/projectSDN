const jwt = require("jsonwebtoken");

const middlewareController = {
    
    //verifyToken
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    res.status(403).json("token is not valid");
                }
                req.user = user;
                next();
            })
        }
        else {
            res.status(401).json("You're not authenticated");
        }
    },

    verifyTokenAuth: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if(req.user.id == req.body.id || req.user.admin){
                next();
            }
            else{
                res.status(401).json("You're not allowed");
            }
        });
    },

    verifyTokenAuthForTeacher: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if(req.user.id == req.body.id || req.user.teacher ){
                next();
            }
            else{
                res.status(401).json("You're not allowed");
            }
        });
    }

}

module.exports = middlewareController;