var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// CONTACTS API ROUTES BELOW

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({
    "error": message,
    "reason": reason
  });
}

function myFunc(req, res) {
  if (req.body.user == "admin" && req.body.password == "admin") {
    let token = Math.random().toString(36).substring(7);
    let lastLogin = new Date();
    res.status(200).json({
      "name": "Juan",
      "lastName": "Perez",
      "token": token,
      "lastLogin": lastLogin
    });
  } else {
    handleError(res, "Invalid user/password", "Must provide a valud user/password", 407);
  }
}

/*  "/api/login"
 *   POST: simulates a login
 */
app.post("/api/login", function (req, res) {
  setTimeout(myFunc, 3500, req, res);
});
