var express = require('express');
var router = express.Router();
let books = require('./../model/book.js');
const Sequelize = require('sequelize');
const axios = require('axios')

router.get('/', async function(req, res, next) {
  	res.send("OK");
});

module.exports = router;
