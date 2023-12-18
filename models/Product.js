const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    description: String,
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    category: String
})

module.exports = mongoose.model("products",ProductSchema);