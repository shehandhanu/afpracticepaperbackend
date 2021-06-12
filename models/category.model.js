const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tripPrice: {
        type: Number,
        required: true
    },
    vehicals: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Vehical'
    }]
})

module.exports = mongoose.model('Category', categorySchema)