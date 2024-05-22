const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hello, how are you ?",
    user: "Macy",
    added: new Date() 
  },
  {
    text: "Hi there!",
    user: "James",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:'messages' });
});

router.post('/new', function(req, res) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  messages.push({
    user: messageUser,
    text: messageText,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
