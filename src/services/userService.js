const User = require('../models/user');

const createUserService = async (userData) => {   
    try {
        let result = await User.create({
            username: userData.username,
            email: userData.email,
            image: userData.image,
            password: userData.password,
            admin: userData.admin,
            teacher: userData.teacher
        })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}



module.exports = {
    createUserService,
}
