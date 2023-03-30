var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Iphone 13",
      category:"Mobile",
      description:"This is good phone",
      image:"https://m.media-amazon.com/images/I/619f09kK7tL._AC_SX679_.jpg"
    },
    {
      name:"Iphone 13 Pro",
      category:"Mobile",
      description:"This is good phone",
      image:"https://m.media-amazon.com/images/I/61AwGDDZd3L._AC_SX679_.jpg"
    },
    {
      name:"Oppo",
      category:"Mobile",
      description:"This is good phone",
      image:"https://m.media-amazon.com/images/I/51c5xfQd0eL.__AC_SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Blackberry",
      category:"Mobile",
      description:"This is good phone",
      image:"https://m.media-amazon.com/images/I/81L-vHXWLZL._AC_SX679_.jpg"
    }
    
  ]
  res.render('user/index', { products,admin:false});
});

module.exports = router;
