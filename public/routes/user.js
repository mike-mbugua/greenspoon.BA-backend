const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome");
});
router.post("/register", (req, res) => {
  res.send(req.body);
  res.send("posting");
});

module.exports = router;
