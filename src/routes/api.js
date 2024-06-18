const express = require('express');
const routerAPI = express.Router();
const middlewareController = require('../controllers/middlewareController');

const { postCreateGenre, getAllGenre, putUpdateGenre, deleteAGenre
} = require('../controllers/genreController');

const { postCreateComment, getAllComment, putUpdateComment, deleteAComment,
} = require('../controllers/commentController');

const { postCreateBook, getAllBook, putUpdateBook, deleteABook, addCommentBook, removeCommentBook
} = require('../controllers/bookController');


const { getAllUser, deleteUser
} = require('../controllers/userController');

routerAPI.get('/user', middlewareController.verifyToken, getAllUser);
routerAPI.delete('/user', middlewareController.verifyTokenAuth, deleteUser);

routerAPI.post('/book', middlewareController.verifyTokenAuth, postCreateBook);
routerAPI.get('/book', getAllBook);
routerAPI.put('/book', middlewareController.verifyTokenAuth, putUpdateBook);
routerAPI.delete('/book', middlewareController.verifyTokenAuth, deleteABook);


routerAPI.post('/comment', middlewareController.verifyTokenAuth, postCreateComment);
routerAPI.get('/comment', getAllComment);
routerAPI.put('/comment', middlewareController.verifyTokenAuth, putUpdateComment);
routerAPI.delete('/comment', middlewareController.verifyTokenAuth, deleteAComment);


routerAPI.post('/genre', postCreateGenre);
routerAPI.get('/genre', getAllGenre);
routerAPI.put('/genre', putUpdateGenre);
routerAPI.delete('/genre', deleteAGenre);





routerAPI.get('/info', (req, res) => {
    console.log(">>check query: ", req.query)
    return res.status(200).json({
        data: req.query
    })
});

routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(">>check params: ", req.params)
    return res.status(200).json({
        data: req.params
    })
});

module.exports = routerAPI; 