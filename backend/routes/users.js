var express = require('express');
var router = express.Router();

var db = require("../db/getUsers");


/* GET users listing. */
router.get("/all", db.getAllUsers);
router.post('/signup', db.signup)

module.exports = router;
