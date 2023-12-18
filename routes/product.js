const express = require("express");
const router = express.Router();
const { addProduct, getAllProduct, delProduct} = require ('../controller/product');
const { check } = require('express-validator');
const { numberPositive, categoryExist } = require("../helpers/db-validators");


router.get('/',getAllProduct);

router.post('/', [
    check('name','Name is required').not().isEmpty(),
    check('price').custom(numberPositive),
    check('category').custom(categoryExist)
],addProduct);

router.delete('/:id',[
    check('id','No es un id correcto').isMongoId()
],delProduct)

module.exports = router;