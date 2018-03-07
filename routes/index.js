var express = require('express');
var router = express.Router();
var fs = require('fs')
var list = require('./../app/public/list.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  setTimeout(()=>res.send(list), 1000)
  
});

module.exports = router;


