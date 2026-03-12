const Product = require("../models/Product");

// CREATE
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// GET ALL
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
};

// GET BY ID
exports.getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product)
            return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};

// UPDATE
exports.updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};

// DELETE
exports.deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted" });
    } catch (err) {
        next(err);
    }
};

// SEARCH BY NAME
exports.searchProduct = async (req, res, next) => {
    try {
        const products = await Product.find({
            name: { $regex: req.query.name, $options: "i" }
        });
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
};

// FILTER BY CATEGORY  
exports.filterByCategory = async (req, res, next) => {
    try {
        const products = await Product.find({
            category: req.query.cat
        });
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
};