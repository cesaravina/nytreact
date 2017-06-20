// Dependencies

var express = require("express");
var path = require("path");
var apiRoutes = require("./apiRoutes");
var router = new express.Router();

//The apiRouter module will handle all routes starting with "/api"
router.use("/api", apiRoutes);


// All other requests will be sent to index.html
router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export the router
module.exports = router;