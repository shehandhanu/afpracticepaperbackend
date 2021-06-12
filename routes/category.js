const express = require('express');
const router = express.Router();

const { addCategory, getCategory, getCategoryByID } = require('../controllers/categoryController');

router.route('/addcategory').post(addCategory);
router.route('/getcategory').get(getCategory);
router.route('/getcategory/:id').get(getCategoryByID);

module.exports = router;