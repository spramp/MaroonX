var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/update', function(req, res) {
  res.render('update');
});

router.get('/people', function(req, res) {
  res.render('people');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/calibration', function(req, res) {
  res.render('calibration');
});

router.get('/iotd', function(req, res) {
  res.render('iotd');
});

module.exports = router;
