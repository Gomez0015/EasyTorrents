var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.headers.get('X-RapidAPI-Proxy-Secret') == "61feeeb99dmsh768caf02d77300fp114237jsn6b6307310aff") {
        controller.search(req, res);
    } else {
        res.send({ error: "Not Authorized" });
    }
});

module.exports = router;