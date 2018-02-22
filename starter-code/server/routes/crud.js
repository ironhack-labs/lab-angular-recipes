const express      = require('express');
const router       = express.Router();
const apiRoutes    = require('./api/index');

router.use('/api', apiRoutes)

module.exports = router;


const express = require('express');
const debug = require('debug')('server:crud');
const _ = require('lodash');

const generateCRUD = (Model) => {

  const router = express.Router();

  /* R => RETRIEVE */
  // Retrieve all
  router.get('/', function (req, res, next) {
    debug(`Retrieving all`);
    Model.find({...req.query})
      .then(list => res.status(200).json(list))
      .catch(e => res.status(500).json(e))
  });
}
