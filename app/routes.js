const express = require('express');
const reservationRouter = require('./booking/router');
const router = express.Router();

router.use('/booking', reservationRouter);

module.exports = router;
