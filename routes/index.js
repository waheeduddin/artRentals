var express = require('express');
var router = express.Router();

// GET /productDetail
router.get('/productDetail', function(req, res, next) {
  return res.render('productDetail', { title: 'productDetail' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /vendorView
router.get('/vendorView', function(req, res, next) {
  return res.render('vendorView', { title: 'vendorView' });
});
//GET/Login
  router.get('/login', function(req,res,next){
  return res.render('login', { title: 'Login' });
})

module.exports = router;
