// Import models connection.
var express = require("express");
var router = express.Router();

//IMPORT THE MODEL (burger.js) to use its database function
var burger = require("../model/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // burger.all(function(data) {
  //   var handlebarObject = {
  //     burger: data
  //   };
  //   console.log(handlebarObject);
    res.render("index", );
  });
// });

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured", "date"
  ], [
    req.body.burgerName, 0, new Date()
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devour
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;