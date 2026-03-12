const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    category: String,
    supplier: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        min: 0
    },
    reorderLevel: {
        type: Number,
        min: 1
    },
    price: {
        type: Number,
        min: 1
    },
    manufactureDate: Date,
    type: {
        type: String,
        enum: ["Perishable", "Non-Perishable"]
    },
    status: {
        type: String,
        default: "Available"
    }
});

module.exports = mongoose.model("Product", productSchema);