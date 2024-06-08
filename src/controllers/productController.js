const { createProduct, getProduct, uProduct, dProduct } = require('../services/spService');

module.exports = {
    postCreateProduct: async (req, res) => {
        let result = await createProduct(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },
    getAllProduct: async (req, res) => {
        let result = await getProduct(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    putUpdateProduct: async (req, res) => {
        let result = await uProduct(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },

    deleteAProduct: async (req, res) => {
        let result = await dProduct(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    }

    
}