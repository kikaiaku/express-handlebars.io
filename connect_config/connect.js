var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "127.0.0.1",
    user: "root",
    password: "K1ka1AkuOkam1<363",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
