const { createBook, getBook, uBook, dBook, } = require('../services/bookService');

module.exports = {
    postCreateBook: async (req, res) => {
        let result = await createBook(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    // addCommentBook: async (req, res) => {
    //     let result = await addcomment(req.body);
    //     return res.status(200).json({
    //         EC: 0,
    //         data: result
    //     });
    // },

    // removeCommentBook: async (req, res) => {
    //     let result = await removecomment(req.body);
    //     return res.status(200).json({
    //         EC: 0,
    //         data: result
    //     });
    // },
    
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
    }

    
}