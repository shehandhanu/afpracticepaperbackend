const Vehical = require('../models/vehical.model');
const Category = require('../models/category.model');

//Add Vehical
exports.addVehical = async (req, res) => {

    const vehical = await Vehical.create(req.body)

    if (!vehical) {
        res.status(401).json({
            success: false,
            message: 'Add Vehical is failed'
        })
    }

    if (vehical.categories.length > 0) {
        vehical.categories.map(async (categorie) => {
            const updatedCategory = await Category.findByIdAndUpdate(
                categorie, { $push: { vehicals: [vehical.id] } })
            if (!updatedCategory) {
                res.status(401).json({
                    success: false,
                    message: 'faild to Update category'
                })
            }
        })
    }

    res.status(200).json({
        success: true,
        vehical
    })
}

//Get Vehicals
exports.getVehicals = async (req, res) => {
    const vehical = await Vehical.find()

    if (!vehical) {
        res.status(401).json({
            success: false,
            message: 'Add Category is failed'
        })
    }

    res.status(200).json({
        success: true,
        vehical
    })
}

//Get Vehical
exports.getVehical = async (req, res) => {
    const vehical = await Vehical.findById(req.params.id)
        .populate('categories')

    if (!vehical) {
        res.status(401).json({
            success: false,
            message: 'Add Category is failed'
        })
    }

    res.status(200).json({
        success: true,
        vehical
    })
}

exports.getvalue = async (req, res) => {

    const VtypeID = req.body.vID;
    const CtypeID = req.body.cID;
    const duration = req.body.duration;

    const vehical = await Vehical.findById(VtypeID);
    if (!vehical) {
        res.status(401).json({
            success: false,
            message: 'Vehical Not Found'
        })
    }

    const category = await Category.findById(CtypeID);
    if (!category) {
        res.status(401).json({
            success: false,
            message: 'Category Not Found'
        })
    }

    const total = vehical.vPrice + category.tripPrice + Number(duration);

    res.status(200).json({
        success: true,
        price: total
    })

}