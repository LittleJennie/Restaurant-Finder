const express = require('express');
const router = express.Router();
const searchRestaurants = require('./Models/searchRestaurants');
const samplePost = require('./Models/samplePost');

router.get('/searchRestaurants', searchRestaurants);
router.post('/samplePost', samplePost);

module.exports = router;
