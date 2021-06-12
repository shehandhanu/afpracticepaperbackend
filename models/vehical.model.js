const mongoose = require('mongoose');

const vihicalSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    vPrice: {
        type: Number,
        required: true,
    },
    categories: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
        }
    ]
})

module.exports = mongoose.model('Vehical', vihicalSchema);