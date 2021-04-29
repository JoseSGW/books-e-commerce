const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const genreRouter = require('./genre.js');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/books', productRouter);
router.use('/genres', genreRouter);

module.exports = router;
