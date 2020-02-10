var express = require('express');
var router = express.Router();

router.get('/all', (req, res) => {
  res.send('Sending all posts!');
});

router.get('/:user_id', (req, res) => {
  res.send('Sending all post from this user!');
});

router.post('/register', (req, res) => {
  res.send('Creating new post!');
});


/posts/all
/posts/:user_id
/posts/register


module.exports = router;
