const Product = require('../models/product');
const aqp = require('api-query-params');
module.exports = {
    createProduct: async (data) => {
        // if (data.type === "EMPTY-PRODUCT") {
            let result = await Product.create(data);
            return result;
        // }

        return null;
    },
    getProduct: async (queryString) => {
        const page = queryString.page;
    
        const { filter, limit, population } = aqp(queryString);
    
        delete filter.page;
    
        // Kiểm tra xem điều kiện giá đã được cung cấp trong tham số truy vấn chưa
        if (queryString.minPrice) {
            filter.price = { $gte: parseFloat(queryString.minPrice) };
        }
    
        let offset = (page - 1) * limit;
        const result = await Product.find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();
        return result;
    },
    
    

    uProduct: async (data) => {
        try {
            let result = await Product.updateOne({ _id: data.id }, { ...data });
            return result;
        } catch (error) {
            console.log(">>>error: ", error);
            return null;
        }
    },



    dProduct: async (id) => {

        try {
            let result = await Product.deleteById(id);
            return result;
        } catch (error) {
            console.log(">>>error: ", error);
            return null;
        }
    }

}