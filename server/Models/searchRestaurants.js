const axios = require('axios');

module.exports = searchRestaurants = (req, res) => {
  const YELP_API_KEY = process.env.YELP_API_KEY;
  const { term, location } = req.query;
  const limit = 10;

  axios.get('https://api.yelp.com/v3/businesses/search', {
    params: {term, location, limit},
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  })
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
};
