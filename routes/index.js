const express = require('express');
const router = express.Router();
const apicontacts = require('./api/contacts');

/* GET home page. */
router.use('/api/contacts', apicontacts)

router.get('*', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
