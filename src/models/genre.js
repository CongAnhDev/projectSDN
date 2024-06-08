const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
//shape database
const genreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true,// createAt, updateAt
    }
);

genreSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Genre = mongoose.model('genre', genreSchema);

module.exports = Genre;
