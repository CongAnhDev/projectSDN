const { createBook, getBook, uBook, dBook, } = require('../services/bookService');

const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService');

module.exports = {
    postCreateBook: async (req, res) => {
        let result = await createBook(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    getAllBook: async (req, res) => {
        let result = await getBook(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    putUpdateBook: async (req, res) => {
        let result = await uBook(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    deleteABook: async (req, res) => {
        let result = await dBook(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    postUploadSingleFile : async (req, res) => {

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
    
        let result = await uploadSingleFile(req.files.image);
    
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },

    postUploadMultipleFiles : async (req, res) => {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        // console.log(req.files);
        //upload single => files is an object
        //upload multiple => files is an array
        if (Array.isArray(req.files.image)) {
            //upload multiple
            let result = await uploadMultipleFiles(req.files.image);
            return res.status(200).json({
                EC: 0,
                data: result
            })
    
        } else {
            //upload single
            return await postUploadSingleFile(req, res);
        }
    }
}

