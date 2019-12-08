const express = require('express');
const router = express.Router();
const searchRestaurants = require('./Models/searchRestaurants');

router.get('/searchRestaurants', searchRestaurants);

module.exports = router;
