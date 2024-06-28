
const {  getBook } = require('../services/bookcommentService');

module.exports = {
getCommentBook: async (req, res) => {
        let result = await getBook(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        });
    },
}