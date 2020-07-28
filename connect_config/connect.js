var mysql = require("mysql");
var connection;
var dotenv = require("dotenv");
dotenv.config();
if (process.env.JAWSDB_URL) {
  console.log("\n\n\n using JAWS \n\n\n");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("\n\n\n using local \n\n\n")
  connection = mysql.createConnection({
    port: process.env.port,
    host: "::",
    user: "root",
    password: "K1ka1AkuOkam1<363",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(e){
  if(e){
    console.log("error", e)
  } else {
    console.log("connected as", connection.threadId
    )
  }
});
// Export connection for our ORM to use.
module.exports = connection;
