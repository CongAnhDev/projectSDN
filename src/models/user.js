const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
//shape database
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 20,
            unique: true
        },
        email:{
            type: String,
            required: true,
            minlength: 6,
            maxlength: 50,
            unique: true
        },
        password:{
            type: String,
            required: true,
            minlength: 6,
        },
        admin:{
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true,// createAt, updateAt
    }
);

userSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const User = mongoose.model('user', userSchema);

module.exports = User;
