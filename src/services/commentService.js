const Comment = require('../models/comment');
const aqp = require('api-query-params');
module.exports = {
    createComment: async (data,req) => {
       
        let result = await Comment.create({
            comment: data.comment,
            rating: data.rating,
            author: data.author,
            createdBy: [req.user.id], 
        });
            return result;
     
    },
    getComment: async (queryString) => {
        const page = queryString.page;
    
        const { filter, limit, population } = aqp(queryString);
    
        delete filter.page;
    
        let offset = (page - 1) * limit;
        const result = await Comment.find(filter)
           .populate(population)
           .skip(offset)
           .limit(limit)
           .exec();
        return result;
    },
    uComment: async (data) => {
        try {
            let result = await Comment.updateOne({ _id: data.id }, {...data });
            return result;
        } catch (error) {
            console.log(">>>error: ", error);
            return null;
        }
    },
    dComment: async (id) => {
        try {
            let result = await Comment.deleteById(id);
            return result;
        } catch (error) {
            console.log(">>>error: ", error);
            return null;
        }
    }
}