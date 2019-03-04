const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");

const {db} = require("../db/index");

passport.use(
  new LocalStrategy((username, password, done) => {
    db.one("SELECT * FROM users WHERE name = ${username}", {
      username: username
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        console.log(err);
        return done(err);
      });
  })
);

init();

module.exports = passport;
