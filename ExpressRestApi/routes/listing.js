var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

router.get('/protected',
    jwt({
        secret: 'shhhhhhared-secret',
        audience: 'http://demoauthapi/protected',
        issuer: 'http://issuer'
    }),
    function (req, res) {
        if (!req.user.admin) return res.sendStatus(401);
        res.sendStatus(200);
    });

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res) {
    res.send(`Got a POST request ${JSON.stringify(req)}`);
});

module.exports = router;
