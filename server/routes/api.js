var express = require('express'),
 router = express.Router();
 
//routes for user api
router.use("/user", require("../controllers/user.api"));
router.use("/indicador", require("../controllers/instrumento.api"));
//add here other api routes
 
module.exports = router;
