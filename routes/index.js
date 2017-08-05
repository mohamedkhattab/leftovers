var express = require('express');
var router = express.Router();
var product = require('../models/product');

router.get('/', function(req, res, next) {
  res.render('index', {});
});

/* GET home page. */
router.get('/product', function(req, res, next) {
  res.json({
    name: "Horizon Organic lactose-free Milk",
    photo: "https://i5.walmartimages.com/asr/44c1b9ca-205f-4816-8151-58c5c691cdf1_1.7b9452d22f67782285d1ac61768c3f78.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    Location: "Gormet, Cairo, Egypt",
    likes: 31,
    dislikes: 9,
    reviews: [
      { name: 'Jeff Sessions', body: 'really good product, higlhy recommended!'}
    ],
    sponsered: false
  });
});

router.post('/product', function(req, res, next) {
  console.log(req.body);
  res.json('');
});

module.exports = router;
