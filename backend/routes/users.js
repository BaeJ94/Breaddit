var express = require('express');
var router = express.Router();

var db = require("../db/getUsers");

/* GET users listing. */
router.get("/users", db.getAllUsers);

module.exports = router;
