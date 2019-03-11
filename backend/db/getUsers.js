const {db} = require('./index.js')
const authHelpers = require("../auth/helpers");

function getAllUsers(req, res, next) {
  db.any('select * from users')
    .then(function (data) {
      res.send({
        status: 'success',
        data: data,
        message: 'Retrieved All users'
      });
    })
    .catch(function (err) {
      console.log(err)
    });
}

function getAllSubs(req, res, next){
  db.any('select * from subs')
    .then(function (data){
      res.send({
        status: 'success',
        data: data,
        message: 'Retrived All subs'
      });
    })
    .catch(function (err) {
      console.log(err)
    });
}
function getOneSub(req, res, next) {
  db.any(`SELECT * FROM posts where subId = ${req.body.id}`)
    .then((data) => {
      console.log(data)
      res.send({
        status: 'success',
        data: data,
        message: 'Retrived the posts'
      })
    })
}

function getAllPosts (req, res, next) {
  db.any('SELECT * FROM posts')
    .then((data) => {
      console.log(data)
      res.send({
        status: 'success',
        data: data,
        message: 'Retrived All Posts'
      })
    })
}

function signup(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);

  db.none(
    "INSERT INTO users (name, email, password) VALUES (${username}, ${email}, ${password})",
    { username: req.body.username, email: req.body.email, password: hash }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful for ",
        username: req.body.username
      });
    })
    .catch(err => {
      console.log(err, 'signup err')
      res.status(500).json({
        message: err
      });
    });
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}
// function signup(req, res, next) {
//   console.log(req.body)
//   var username = req.body.signup.username;
//   var email = req.body.signup.email;
//   var pass = req.body.signup.password;

//   db.none('INSERT INTO users (name, email, password) VALUES (${username}, ${email}, ${pass})', {
//     username, email, pass
//   }).then(() => {
//     res.send(username);
//   })
//     .catch(err => {
//       console.log('SQL ERR', err)
//     })
// }

module.exports = {
  getAllUsers,
  signup,
  loginUser,
  isLoggedIn,
  logoutUser,
  getAllSubs,
  getOneSub,
  getAllPosts
}