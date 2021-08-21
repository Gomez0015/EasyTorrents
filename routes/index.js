var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    controller.search(req, res);
});

module.exports = router;