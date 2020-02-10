const express = require('express');
const router = express.Router();

const pgp = require('pg-promise')();
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'facebook_db',
}
const db = pgp(connection);

router.get('/all', async (req, res) => {
  try {
    let data = await db.any('SELECT * FROM posts')
    res.status(200).json({
      posts: data
    }) 
  } catch(error) {        
    res.send('An error occurred: ' + error);
    };
});

router.get('/:user_id', (req, res) => {
  try {
    let data = await db.any(`SELECT * FROM posts WHERE poster_id = ${req.params.user_id}`)
    res.status(200).json({
      posts: data
    }) 
  } catch(error) {        
    res.send('An error occurred: ' + error);
    };
});

router.post('/register/:user_id', (req, res) => {
  try {
    let data = await db.none('INSERT INTO posts(poster_id, body) VALUES($1, $2)', [req.params.id, req.body[body]])
    res.status(200).json({
      message: "Post Created"
    }) 
  } catch(error) {        
    res.send('An error occurred: ' + error);
    };
});

