var express = require('express');
var router = express.Router();

// Get home page
router.get('/', function(request, respond, next) {
   console.log('index router.get triggered')
   respond.render('flights/index', { title: 'All Flights' });
});

module.exports = router;