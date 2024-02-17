const CategoryM = require('../models/Category');

const getCategories = async (req, res) => {

    try {
        const categories = await CategoryM.find();
        return res.json(categories);
    } catch (error) {
        console.log(error.message)
    }
};

const createCategories = async (req, res) => {

    try {
        const categories = await CategoryM.create(req.body);
        return res.status(200).json({
            status: true,
            categories: categories,
             message: "post created successfully"
        });
    } catch (error) {
        console.log(error.message)
    }
};



module.exports={
    getCategories,
    createCategories
}