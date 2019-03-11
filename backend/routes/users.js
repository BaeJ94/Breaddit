var express = require('express');
var router = express.Router();

var db = require("../db/getUsers");
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");


/* GET users listing. */
router.get("/all", db.getAllUsers);
router.post("/login", passport.authenticate("local", {}), db.loginUser);
router.get("/isLoggedIn", db.isLoggedIn);
router.post("/logout", loginRequired, db.logoutUser);
router.post('/signup', db.signup);
router.get('/subs', db.getAllSubs)
router.post('/bread', db.getOneSub)
router.get('/getAll', db.getAllPosts)


module.exports = router;
