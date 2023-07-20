const express = require('express');
const router = express.Router();

/* Import Api Router -------------------------------------------------------- */
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/hello/world', function (req, res) {
	res.cookie('XSRF-TOKEN', req.csrfToken());
	res.send('Hello World!');
});

module.exports = router;
