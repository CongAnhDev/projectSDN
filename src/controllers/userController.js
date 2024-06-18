const User = require('../models/user');

const userController = {
    getAllUser: async(req,res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(err)
        }
    },

    deleteUser: async(req,res) => {
        try {
            const user = await User.deleteById(req.body.id);
            res.status(200).json("Delete successful");
        } catch (error) {
            res.status(500).json(err)
        }
    }
}


module.exports = userController;