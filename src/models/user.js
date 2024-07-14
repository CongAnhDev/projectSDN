const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
//shape database
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        
        image: String,

        password:{
            type: String,
            required: true,
        },
        admin:{
            type: Boolean,
            default: false
        },

        teacher:{
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
