const express = require('express');
const router = express.Router();

const { addVehical, getVehical, getVehicals, getvalue } = require('../controllers/vehicalController');

router.route('/addvehical').post(addVehical);
router.route('/getvehical').get(getVehicals);
router.route('/getvehical/:id').get(getVehical);
router.route('/getvalue').post(getvalue);


module.exports = router;