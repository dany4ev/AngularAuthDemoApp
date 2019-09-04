var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res) {
    res.send(`Got a POST request ${JSON.stringify(req)}`);
});

router.delete('/:id', function (req, res) {
    res.send(`Got a DELETE request at /user/:${req.params.id}`);
});

module.exports = router;
