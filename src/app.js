const express = require('express');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

// rest of the packages
const cookieParser = require('cookie-parser');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

// middleware
const notFoundMiddleware = require('./middlewares/not-found.js');
const errorHandlerMiddleware = require('./middlewares/error-handler.js');


app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

// Body parsing middleware
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/notes', noteRoutes);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



module.exports = {app}
