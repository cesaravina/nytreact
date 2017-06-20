// Dependencies

var express = require("express");
var articlesController = require("../controllers/articlesController");
var router = new express.Router();

// GET saved articles
router.get("/articles", articlesController.retrieve);

// A new quote will be created using the data from req.body
router.post("/articles", articlesController.save);

// Delete a specific quote. Use the ID in req.params.id
route.delete("/articles/:id", articlesController.destroy);

// export the router
module.exports = router;