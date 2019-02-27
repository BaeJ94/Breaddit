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

function signup(req,res,next){
    //find SQL command to add to database
    console.log(req.body)
    const username = req.body.signup;

    db.one(`INSERT INTO users (name) VALUES (${username})`)
        res.send(username);
}

module.exports ={
    getAllUsers,
    signup
}