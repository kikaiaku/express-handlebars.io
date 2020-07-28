var mysql = require("mysql");
require('dotenv').config();
// if (process.env.JAWSDB_URL) {
//   console.log("\n\n\n using JAWS \n\n\n");
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   console.log("\n\n\n using local \n\n\n")
let connection = mysql.createConnection({
  host: process.env.host,
  port: 3306,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});
// };

// Make connection.
connection.connect(function (e) {
  if (e) {
    console.log("error", e)
  } else {
    console.log("connected as", connection.threadId
    )
  }
});
// Export connection for our ORM to use.
module.exports = connection;
