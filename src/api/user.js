const express = require("express");
const router = express.Router();
const {
  addContactDetails,
} = require("../controller/UserController");

// Add Contact Details
router.post("/contact-details", (req, res) => addContactDetails(req, res));


module.exports = router;
