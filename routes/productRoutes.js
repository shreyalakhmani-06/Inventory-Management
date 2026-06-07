const express = require('express');
const { validateProduct } =require('../middlewares/validators');

const router = express.Router();

const {
    addProduct,
    getProducts,
    updateqty,
    deleteProduct
} = require('../controllers/procontroller');

const {
    authenticateToken
} = require('../middlewares/authMiddleware');

router.post(
    '/',
    authenticateToken,
    validateProduct,
    addProduct
);

router.get(
    '/',
    authenticateToken,
    getProducts
);

router.put(
    '/:id/quantity',
    authenticateToken,
    updateqty
);

router.delete(
    '/:id',
    authenticateToken,
    deleteProduct
);

module.exports = router;