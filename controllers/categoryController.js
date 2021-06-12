const Category = require('../models/category.model');

//Add Category
exports.addCategory = async (req, res) => {

    const category = await Category.create(req.body)

    if (!category) {
        res.status(401).json({
            success: false,
            message: 'Add Category is failed'
        })
    }

    res.status(200).json({
        success: true,
        category
    })

}

//Get Categorys
exports.getCategory = async (req, res) => {

    const category = await Category.find()

    if (!category) {
        res.status(401).json({
            success: false,
            message: 'Add Category is failed'
        })
    }

    res.status(200).json({
        success: true,
        category
    })

}

//Get Category Vehicals
exports.getCategoryByID = async (req, res) => {

    const category = await Category.findById(req.params.id).populate('Vehical')

    if (!category) {
        res.status(401).json({
            success: false,
            message: 'Add Category is failed'
        })
    }

    res.status(200).json({
        success: true,
        category: category.vehicals
    })

}