var pgp = require("pg-promise")({});
var connectionString = "postgres://postgres:codenode@localhost/breaddit"
//user is postgress with "codenode" as password. Please remove if not using AJ's system.
const db = pgp(connectionString);

module.exports = {
    db
}
