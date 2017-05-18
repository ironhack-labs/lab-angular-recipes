const express      = require('express');
const router       = express.Router();
const apiRoutes    = require('./api/index');

router.use('/api', apiRoutes);
router.use('/', (req, res) => {
  res.send('Hola papi');
})

module.exports = router;
