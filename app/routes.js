const express = require('express');
const reservationRouter = require('./bookings/router');
const router = express.Router();

router.use('/bookings', reservationRouter);

module.exports = router;
