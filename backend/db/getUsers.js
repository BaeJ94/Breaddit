var pgp = require("pg-promise")({});

//user is postgress with "codenode" as password. Please remove if not using AJ's system.
const db = pgp("postgres://postgres:codenode@localhost/breaddit")

function getAllUsers(req, res, next) {
  db.any('select * from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      console.log(err)
      return next(err);
    });
}

module.exports ={
    getAllUsers
}