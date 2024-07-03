let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.plantController.getPlants(res);
});
// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.plantController.createPlant(req.body, res);
});
//dynamics roots
router.put("/:id", (req, res) => {
  Controllers.plantController.updatePlant(req, res);
});
router.delete("/:id", (req, res) => {
  Controllers.plantController.deletePlant(req, res);
});

module.exports = router;
