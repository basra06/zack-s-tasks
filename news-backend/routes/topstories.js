var express = require("express");
var router = express.Router();
var topstory = require("../controller/topstories");

router.get(
  "/top-stories/:section",
  topstory.getTopstories  
);

module.exports = router;