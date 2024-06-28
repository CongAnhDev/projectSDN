const { createFavorite, getFavorite, uFavorite, dFavorite, } = require('../services/favoriteService');


module.exports = {
    postCreateFavorite: async (req, res) => {
        let result = await createFavorite(req.body, req);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    getAllFavorite: async (req, res) => {
        let result = await getFavorite(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    putUpdateFavorite: async (req, res) => {
        let result = await uFavorite(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    deleteAFavorite: async (req, res) => {
        let result = await dFavorite(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },
}

