const express = require('express');
const routerAPI = express.Router();


const { postCreateGenre, getAllGenre, putUpdateGenre, deleteAGenre
} = require('../controllers/genreController');

const { postCreateComment, getAllComment, putUpdateComment, deleteAComment,
} = require('../controllers/commentController');

const { postCreateBook, getAllBook, putUpdateBook, deleteABook
} = require('../controllers/bookController');


routerAPI.post('/book', postCreateBook);
routerAPI.get('/book', getAllBook);
routerAPI.put('/book', putUpdateBook);
routerAPI.delete('/book', deleteABook);


routerAPI.post('/comment', postCreateComment);
routerAPI.get('/comment', getAllComment);
routerAPI.put('/comment', putUpdateComment);
routerAPI.delete('/comment', deleteAComment);


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