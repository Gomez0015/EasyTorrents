var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.header('X-RapidAPI-Proxy-Secret') == process.env.RapidAPIKEY) {
        controller.search(req, res);
    } else {
        res.send({ error: "Not Authorized" });
    }
});

module.exports = router;