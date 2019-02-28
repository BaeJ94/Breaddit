var pgp = require("pg-promise")({});

//user is postgress with "codenode" as password. Please remove if not using AJ's system.
const db = pgp("postgres://postgres:codenode@localhost/breaddit")

//postgres://postgres:codenode@breaddit

function getAllUsers(req, res, next) {
  db.any('select * from users')
    .then(function (data) {
      console.log('hi data', data)
      res.send({
        status: 'success',
        data: data,
        message: 'Retrieved ALL users'
      });
    })
    .catch(function (err) {
      console.log(err)
      // return next(err);
    });
}

function signup(req, res, next) {
  console.log(req.body)
  var username = req.body.signup.username;
  var email = req.body.signup.email;
  var pass = req.body.signup.password;

  db.none('INSERT INTO users (name, email, password) VALUES (${username}, ${email}, ${pass})', {
    username, email, pass
  }).then(() => {
    res.send(username);
  })
    .catch(err => {
      console.log('SQL ERR', err)
    })
}

module.exports = {
  getAllUsers,
  signup
}