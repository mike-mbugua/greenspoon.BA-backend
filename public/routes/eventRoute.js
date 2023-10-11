const express = require("express");

const {
  createEvent,
  getEvents,
  deleteEvent,
  updateEvent,
  getSingleEvent,
} = require("../controllers/eventController");

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.delete("/:id", deleteEvent);
router.patch("/:id", updateEvent);
router.get("/:id", getSingleEvent);

module.exports = router;
