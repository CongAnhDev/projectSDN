const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const genreSchema = new mongoose.Schema(
    {
        name: String
    }
)
const bookSchema = new mongoose.Schema(
    {
        isbn: String,
        title: String,
        subTitle: String,
        publish_date: String,
        publisher: String,
        pages: String,
        price: String,
        image: String,  
        description: String,
        website: String,
        genre: genreSchema,
        comments:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }]
    },
    {
        timestamps: true,// createAt, updateAt
    }
);

bookSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Book = mongoose.model('book', bookSchema);

module.exports = Book;
