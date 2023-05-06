const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
        _id: {type: mongoose.Schema.Types.ObjectId},
        uniq_id: {type: String},
        product_name: {type: String},
        brand_name: {type: String},
        asin: {type: String},
        category: {type: String},
        upc_ean_code: {type: String},
        list_price: {type: String},
        selling_price: {type: String},
        quantity: {type: String},
        model_number: {type: String},
        about_product: {type: String},
        product_specification: {type: String},
        technical_details: {type: String},
        shipping_weight: {type: String},
        product_dimensions: {type: String},
        image: {type: String},
        variants: {type: String},
        sku: {type: String},
        product_url: {type: String},
        stock: {type: String},
        product_details: {type: String},
        dimensions: {type: String},
        color: {type: String},
        ingredients: {type: String},
        direction_to_use: {type: String},
        is_amazon_seller: {type: String},
        size_quantity_variant: {type: String},
        product_description: {type: String},
    },
    { 
        collection: "shamazon" 
    }
);

const shamazonSchema = mongoose.model('schema', ReactFormDataSchema);
module.exports = shamazonSchema;