/* Imports ------------------------------------------------------------------ */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

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

modules.exports = app;
