const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
//shape database
const commentSchema = new mongoose.Schema(
    {
        comment:{
            type: String,
            required: true
        },
        rating: String,
        author: String,
        createdBy: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'user'
        }],

    },
    {
        timestamps: true,// createAt, updateAt
    }
);

commentSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
