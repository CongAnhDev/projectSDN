const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const genreSchema = new mongoose.Schema(
    {
        name: String
    }
)
const bookSchema = new mongoose.Schema(
    {
        isbn: {
            type: String,
            required: true
        },
        title: String,
        subTitle: String,
        publish_date: String,
        publisher: String,
        pages: String,
        price: String,  
        description: String,
        website: String,
        comment: String,
        genre: genreSchema,
        comments:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }]
    },
    {
        timestamps: true,// createAt, updateAt
    }
);

bookSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
