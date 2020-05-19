const router = require("express").Router();
const googleController = require("../../controllers/googleControllers");

// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;