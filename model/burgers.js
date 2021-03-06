  
// Import the ORM to create functions that will interact with the database.
var orm = require("../connect_config/orm.js");

var burger = {
  all: function(burgerCallback) {
    orm.all("burgers", function(res) {
      burgerCallback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, burgerCallback) {
    orm.create("burgers", cols, vals, function(res) {
      burgerCallback(res);
    });
  },
  update: function(objColVals, condition, burgerCallback) {
    orm.update("burgers", objColVals, condition, function(res) {
      burgerCallback(res);
    });
  }
};

// Export the database functions for the controller 
module.exports = burger;