const router = require('express').Router();

router.get('/hi', function (req, res) {
	res.send('Hi Everybody!');
});

router.post('/test', function (req, res) {
	res.json({ requestBody: req.body });
});

module.exports = router;
