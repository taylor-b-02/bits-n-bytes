const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
	'/',
	asyncHandler(async (req, res) => {
		const { password, username } = req.body;
		const user = await User.signup({ username, password });

		await setTokenCookie(res, user);

		return res.json({
			user,
		});
	})
);

module.exports = router;
