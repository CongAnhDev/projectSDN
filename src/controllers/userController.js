const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService'); 
const { createUserService } = require('../services/userService'); 
const bcrypt = require('bcrypt');

const userController = {
    postCreateUser: async (req, res) => {
        let { username, email, image, password, admin, teacher } = req.body;

        let imageUrl = "";
        
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);

        // image: String,
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }

        let userData = {
            username,
            email,
            image: imageUrl,
            password:  hashed,
            admin,
            teacher
        }
        let user = await createUserService(userData);

        return res.status(200).json(
            {
                EC: 0,
                data: user
            }
        );
    },

    getAllUser: async(req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteUser: async(req, res) => {
        try {
            await User.deleteById(req.body.id);
            res.status(200).json("Delete successful");
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = userController;