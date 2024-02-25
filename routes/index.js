var express = require('express');
var router = express.Router();

// Get home page
router.get('/', function(request, respond, next) {
    respond.render('index', { title: 'All Flights'});
});

module.exports = router;