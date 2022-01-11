var express = require('express');
var router = express.Router();
const messages = require("./messages.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini messageboard',messages:messages });
});

router.post('/new',function(req,res,next) {
  const newMessage = {
    text: req.body.text, 
    user: req.body.user, 
    details: req.body.details,
    added: new Date()
  }
  messages.unshift(newMessage);
  res.redirect('/')
})
router.get('/new', (req, res, next) => {
  res.render('form');
})
module.exports = router;
