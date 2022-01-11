var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "What's Up!",
    user: "Alex",
    added: new Date()
  },
  {
    text: "Oh, hi!",
    user: "Jack",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini messageboard',messages:messages });
});
router.get('/new',function(req,res,nect){
  res.render('form')
})
router.post('/new',function(req,res,next) {
  const bodyRequest = req.body
  console.log(bodyRequest)
})
module.exports = router;
