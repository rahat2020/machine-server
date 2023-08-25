const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
    },
    reviewer: {
        type: String,
    },
}, {
    timestamps: true,
});


const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    category: {
        type: String,
    },
    photo: {
        type: String,
    },
    inStock: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },
    rating: {
        type: String,
    },
    model: {
        type: String,
    },
    brand: {
        type: String,
    },
    resulations: {
        type: String,
    },
    reviews: [reviewSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model("Product", ProductSchema);