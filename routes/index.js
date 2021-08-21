var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.header('X-RapidAPI-Proxy-Secret') == "9be66f80-02b1-11ec-a11b-1f5a4b32332b") {
        controller.search(req, res);
    } else {
        res.send({ error: "Not Authorized" });
    }
});

module.exports = router;