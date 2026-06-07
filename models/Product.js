const mongoose = require('mongoose');
const proschema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
const Product= mongoose.model('Product',proschema);
module.exports=Product;