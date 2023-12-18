const Category = require('../models/categories');

const numberPositive = (price) => {
    return new Promise((resolve, reject) => {
        if (price <= 0) {
            reject(new Error(`El número debe ser positivo`));
        } else {
            resolve();
        }
    });
};

const categoryExist = (name) => {
    return Category.findOne({ name })
        .then(categoryDb => {
            if (!categoryDb) {
                throw new Error(`La categoría no existe`);
            }
        });
};
/* const priceMayor0 = async (price) => {
    const price = await Disc.findOne({price});

    if(price<0){
        throw new Error(`Price ${price} debe ser mayor que 0`);
    }
} */
module.exports = { numberPositive, categoryExist };
