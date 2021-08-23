const express = require("express");
const router = express.Router();
const addressController = require('../controllers/AddressController');

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get('/I/want/title/', function (req, res) {
  addressController.view(req, res);
});


module.exports = router;
