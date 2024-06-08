const express = require('express');
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApi, postUploadSMultipleFilesAPI
} = require('../controllers/apiController');

const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers,
    putUpdateCustomers, deleteACustomer, deleteArrayCustomer
} = require('../controllers/customerController');

const { postCreateProject, getAllProject, updateProject, deleteProject
} = require('../controllers/projectController');

const { postCreateTask, getAllTask, updateTask, deleteTask
} = require('../controllers/taskController');




const { postCreateProduct, getAllProduct, putUpdateProduct, deleteAProduct
} = require('../controllers/productController');

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


routerAPI.post('/product', postCreateProduct);
routerAPI.get('/product', getAllProduct);
routerAPI.put('/product', putUpdateProduct);
routerAPI.delete('/product', deleteAProduct);


routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadSMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomers);
routerAPI.delete('/customers', deleteACustomer);
routerAPI.delete('/customers-many', deleteArrayCustomer);

routerAPI.post('/projects', postCreateProject);
routerAPI.get('/projects', getAllProject);
routerAPI.put('/projects', updateProject)
routerAPI.delete('/projects', deleteProject)

routerAPI.post('/tasks', postCreateTask);
routerAPI.get('/tasks', getAllTask);
routerAPI.put('/tasks', updateTask);
routerAPI.delete('/tasks', deleteTask);









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