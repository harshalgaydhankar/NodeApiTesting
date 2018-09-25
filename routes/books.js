var express = require('express');
var router = express.Router();
const books = [];

// var books[];

/* GET Books page. */
router.get('/', function(req, res, next) {

  res.json({result: books});
});

router.post('/',function(req,res,next){

  books.push(req.body)
  res.json({size : books.length})
});

router.delete('/',function(req,res,next){
  books.forEach((item,index)=>{
    if(item.id == req.body.id){
      books.pop(index);
    }
  })
  res.json({size : books.length})
});

module.exports = router;
