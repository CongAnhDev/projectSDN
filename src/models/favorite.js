const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
//shape database
const favoriteSchema = new mongoose.Schema(
    {
        name: String,
        createdBy: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'user'
        }],
        books:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }]
    },
    {
        timestamps: true,// createAt, updateAt
    }
);

favoriteSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Favorite = mongoose.model('favorite', favoriteSchema);

module.exports = Favorite;
