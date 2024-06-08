const { createGenre, getGenre, uGenre, dGenre } = require('../services/genreService');

module.exports = {
    postCreateGenre: async (req, res) => {
        let result = await createGenre(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },
    getAllGenre: async (req, res) => {
        let result = await getGenre(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    putUpdateGenre: async (req, res) => {
        let result = await uGenre(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    deleteAGenre: async (req, res) => {
        let result = await dGenre(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    }

    
}