const express = require('express');
const router = express.Router();
const apiContacts = require('./api/contacts');

/* GET home page. */
router.use('/api/contacts', apiContacts)

router.get('*', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
