const Favorite = require('../models/favorite');
const aqp = require('api-query-params');

module.exports = {
    createFavorite: async (data, req) => {
        if (data.type === "Favorite") {
            let result = await Favorite.create({
                name: data.name,
                createdBy: [req.user.id], 
            });
            return result;
        }

    if (data.type === "ADD-BOOK") {
        let myFavorite = await Favorite.findById(data.favoriteId).exec();
        for (let i = 0; i < data.booksArr.length; i++) {
            myFavorite.books.push(data.booksArr[i]);
        }
        // check comment co ton tai trong Favorite hay chua sau do moi push

        let newResult = await myFavorite.save();

        //find project by id
        return newResult;
    }

    if (data.type === "REMOVE-BOOK") {
        let myFavorite = await Favorite.findById(data.favoriteId).exec();
        for (let i = 0; i < data.booksArr.length; i++) {
            myFavorite.books.pull(data.booksArr[i]);
        }
        // check comment co ton tai trong Favorite hay chua sau do moi push

        let newResult = await myFavorite.save();

        //find project by id
        return newResult;
    }
   
    return null;
},
getFavorite: async (queryString) => {
    const page = parseInt(queryString.page) || 1; // Ensure page is a number
    const limit = parseInt(queryString.limit) || 10; // Default limit

    const { filter, population, projection } = aqp(queryString);

    delete filter.page;
    delete filter.limit; // Remove limit from filter

    let offset = (page - 1) * limit;
    const result = await Favorite.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .select(projection)
      .exec();
    return result;
  },
    uFavorite: async (data) => {
        try {
            let result = await Favorite.updateOne({ _id: data.id }, {...data });
            return result;
        } catch (error) {
            console.log(">>>error: ", error);
            return null;
        }
    },
    dFavorite: async (id) => {
        try {
            let result = await Favorite.deleteById(id);
            return result;
        } catch (error) {
            console.log(">>>error: ", error);
            return null;
        }
    }
}