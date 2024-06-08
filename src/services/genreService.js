const Genre = require('../models/genre');
const aqp = require('api-query-params');
module.exports = {
    createGenre: async (data) => {
        // if (data.type === "EMPTY-PRODUCT") {
            let result = await Genre.create(data);
            return result;
        // }

     
    },
    getGenre: async (queryString) => {
        const page = queryString.page;
    
        const { filter, limit, population } = aqp(queryString);
    
        delete filter.page;
    
        let offset = (page - 1) * limit;
        const result = await Genre.find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();
        return result;
    },
    
    

    uGenre: async (data) => {
        try {
            let result = await Genre.updateOne({ _id: data.id }, { ...data });
            return result;
        } catch (error) {
            console.log(">>>error: ", error);
            return null;
        }
    },



    dGenre: async (id) => {

        try {
            let result = await Genre.deleteById(id);
            return result;
        } catch (error) {
            console.log(">>>error: ", error);
            return null;
        }
    }

}