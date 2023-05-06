const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
        _id: {type: mongoose.Schema.Types.ObjectId},
        id: {type: Number},
        title: {type: String},
        description: {type: String},
        price: {type: Number},
        discountPercentage: {type: Number},
        rating: {type: Number},
        stock: {type: Number},
        brand: {type: String},
        category: {type: String},
        thumbnail: {type: String},
        images: {type: []},
    },
    { 
        collection: "shamazon_firstCollection" 
    }
);

const schema = mongoose.model('schema', ReactFormDataSchema);
module.exports = schema;