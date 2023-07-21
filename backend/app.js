/* Imports ------------------------------------------------------------------ */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

/* Get environment variables ------------------------------------------------ */
const { environment } = require('./config');
const isProduction = environment === 'production';

/* Initialize Express ------------------------------------------------------- */
const app = express();

/* Connect Middleware ------------------------------------------------------- */
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

/* Security Middleware ------------------------------------------------------ */
if (!isProduction) {
	// Allow Cross-Origin Resource Sharing while in development
	app.use(cors());
}

// Adds security-related HTTP headers to responses sent to clients
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);

// Set the _csrf token and create req.csrfToken method
app.use(
	csurf({
		cookie: {
			secure: isProduction,
			sameSite: isProduction && 'Lax',
			httpOnly: true,
		},
	})
);

/* Import routes ------------------------------------------------------------ */
const routes = require('./routes');

app.use(routes);

/* Error Handlers ----------------------------------------------------------- */
// Catch unhandled requests and forward to error
app.use((_req, _res, next) => {
	const err = new Error("The requested resource couldn't be found.");
	err.title = 'Resource Not Found';
	err.errors = ["The requested resource couldn't be found."];
	err.status = 404;
	next(err);
});

// Process Sequelize errors
app.use((err, _req, _res, next) => {
	// check if error is a Sequelize error:
	if (err instanceof ValidationError) {
		err.errors = err.errors.map((e) => e.message);
		err.title = 'Validation error';
	}
	next(err);
});

// Error Formatter
app.use((err, _req, res, _next) => {
	res.status(err.status || 500);
	console.error(err);
	res.json({
		title: err.title || 'Server Error',
		message: err.message,
		errors: err.errors,
		stack: isProduction ? null : err.stack,
	});
});

module.exports = app;
