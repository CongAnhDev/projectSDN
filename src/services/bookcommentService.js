const Book = require('../models/book');

module.exports = {
    getBook: async (queryString) => {
        try {
            const commentsSearch = queryString.commentsSearch || ''; // Default to empty string if not provided
            const regexPattern = commentsSearch ? commentsSearch : 'n|good'; // Default pattern

            const books = await Book.find({}).populate({
                path: 'comments',
                match: {
                    comment: { $regex: regexPattern, $options: 'i' }
                }
            });

            // Filter out books without matching comments
            const filteredBooks = books.filter(book => book.comments && book.comments.length > 0);

            return filteredBooks;
        } catch (error) {
            throw error;
        }
    }
};
