const express = require('express');
const routerAPI = express.Router();
const middlewareController = require('../controllers/middlewareController');

const { postCreateGenre, getAllGenre, putUpdateGenre, deleteAGenre
} = require('../controllers/genreController');

const { postCreateComment, getAllComment, putUpdateComment, deleteAComment,
} = require('../controllers/commentController');

const { postCreateBook, getAllBook, putUpdateBook, deleteABook, postUploadSingleFile, postUploadMultipleFiles
} = require('../controllers/bookController');

const { getAllUser, deleteUser
} = require('../controllers/userController');

const { getCommentBook } = require('../controllers/bookcommentController');

routerAPI.get('/commentbook', getCommentBook);


const { postCreateFavorite, getAllFavorite, putUpdateFavorite, deleteAFavorite } = require('../controllers/favoriteController');


routerAPI.post('/favorite', middlewareController.verifyTokenAuth, postCreateFavorite);
routerAPI.get('/favorite', getAllFavorite);
routerAPI.put('/favorite', middlewareController.verifyTokenAuth, putUpdateFavorite);
routerAPI.delete('/favorite', middlewareController.verifyTokenAuth, deleteAFavorite);


routerAPI.get('/user', middlewareController.verifyToken, getAllUser);
routerAPI.delete('/user', middlewareController.verifyTokenAuth, deleteUser);

routerAPI.post('/book', middlewareController.verifyTokenAuth, postCreateBook);
routerAPI.get('/book', getAllBook);
routerAPI.put('/book', middlewareController.verifyTokenAuth, putUpdateBook);
routerAPI.delete('/book', middlewareController.verifyTokenAuth, deleteABook);
routerAPI.post('/file', postUploadSingleFile)
routerAPI.post('/files', postUploadMultipleFiles)


routerAPI.post('/comment', middlewareController.verifyTokenAuth, postCreateComment);
routerAPI.get('/comment', getAllComment);
routerAPI.put('/comment', middlewareController.verifyTokenAuth, putUpdateComment);
routerAPI.delete('/comment', middlewareController.verifyTokenAuth, deleteAComment);


routerAPI.post('/genre', postCreateGenre);
routerAPI.get('/genre', getAllGenre);
routerAPI.put('/genre', putUpdateGenre);
routerAPI.delete('/genre', deleteAGenre);






module.exports = routerAPI; 