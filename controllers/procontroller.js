const Product = require('../models/Product');
const addProduct = async(req,res) => {
    try{
        const {name,price,quantity} = req.body;
        const product = new Product({
            name,
            price, 
            quantity
        });
        await product.save();
        res.status(201).json({
            message: 'Product added successfully',
            product
        });
    }
    catch (error){
        res.status(500).json({
            error: error.message
        });
    }
};

const getProducts = async (req, res) => {

    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const search = req.query.search || '';
        const sort = req.query.sort || '';

        const query = {};

        if (search) {
            query.name = {
                $regex: search,
                $options: 'i'
            };
        }

        const sortOption = {};

        if (sort) {

            if (sort.startsWith('-')) {
                sortOption[sort.substring(1)] = -1;
            } else {
                sortOption[sort] = 1;
            }
        }

        const products = await Product.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        const totalProducts = await Product.countDocuments(query);

        res.status(200).json({
            page,
            limit,
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            products
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

const updateqty=async(req,res) => {
    try{
        const {quantity} = req.body;
        const updatedpro = await Product.findByIdAndUpdate(
            req.params.id,
            {quantity},
            {new: true}
        );
        res.status(200).json({
            message: 'Quantity updated successfully',
            updatedpro
        });
    }
    catch(error){
        res.status(500).json({
            error : error.message
        });
    }
};

const deleteProduct = async (req, res) => {

    try {

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Product deleted successfully',
            deletedProduct
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    addProduct,
    getProducts,
    updateqty,
    deleteProduct
};