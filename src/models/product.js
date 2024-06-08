const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
//shape database
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: String,
        description: String,
        image: String,
        active: Boolean

    },
    {
        timestamps: true,// createAt, updateAt
    }
);

productSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Product = mongoose.model('product', productSchema);

module.exports = Product;
