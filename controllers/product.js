const Product = require("../models/product");
const { validationResult } = require('express-validator');

const getAllProduct = (req, res) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(500).json({ message: error }));
};

const addProduct = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { name, description, price, category } = req.body;
    const newProduct = new Product({ name, description, price, category });

    Product.findOne({ name })
        .then(productExist => {
            if (productExist) {
                return res.status(400).json({ msg: "Ya existe un producto con ese nombre" });
            }

            return newProduct.save()
                .then(() => res.json({ newProduct }))
                .catch(error => res.status(500).json({ message: error }));
        })
        .catch(error => res.status(500).json({ message: error }));
};

const delProduct = (req, res) => {
    const idProduct = req.params.id;
    Product.find({ _id: idProduct })
        .then(product => {
            if (!product.length) {
                return res.status(404).json({ msg: `No existe el producto con el id ${idProduct}` });
            }

            return Product.deleteOne({ _id: idProduct })
                .then(() => res.json({ product }))
                .catch(error => res.status(500).json({ message: error }));
        })
        .catch(error => res.status(500).json({ message: error }));
};

module.exports = { addProduct, getAllProduct, delProduct };
