const { createComment, getComment, uComment, dComment } = require('../services/commentService');

module.exports = {
    postCreateComment: async (req, res) => {
        let result = await createComment(req.body);  
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },
    getAllComment: async (req, res) => {
        let result = await getComment(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    putUpdateComment: async (req, res) => {
        let result = await uComment(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    deleteAComment: async (req, res) => {
        let result = await dComment(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    }

    
}