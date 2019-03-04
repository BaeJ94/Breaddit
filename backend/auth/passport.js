const passport = require("passport");
const {db} = require("../db/index");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.name);
  });

  passport.deserializeUser((username, done) => {
    db.one("SELECT * FROM users WHERE name = ${username}", {
      username: username
    })
      .then(user => {
        done(null, user.name);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
