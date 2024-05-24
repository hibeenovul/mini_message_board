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
  res.render('index', { title: 'Mini Messageboard', messages});
});

router.post('/new', function(req, res) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  console.log(`New message from ${messageUser}: ${messageText}`);
  messages.push({
    user: messageUser,
    text: messageText,
    added: new Date()
  });
  console.log(`Current messages:`, messages);
  res.redirect('/');
});

module.exports = router;
