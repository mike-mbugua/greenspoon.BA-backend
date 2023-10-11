const Event = require("../../server/models/events");

const createEvent = async (req, res) => {
  const newEvent = new Event(req.body);

  try {
    const savedEvent = await newEvent.save();
    res
      .status(200)
      .json({ success: true, msg: "Event created successfully", savedEvent });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ msg: "Success", Events: events });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", data: events });
  }
};

const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEvent = await Event.findByIdAndDelete(id);

    res.status(200).json({ msg: "Event deleted successful" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Event not deleted due to server error", error });
  }
};

const updateEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ success: `${id} updated successfully`, updatedEvent });
  } catch (error) {
    res.status(500).json({ error: "Server error", error });
  }
};

const getSingleEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const event = await Event.findById(id);
    res.status(200).json({ msg: `Event Found`, event });
  } catch (error) {
    res.status(500).json({ error: "Server error", error });
  }
};

module.exports = {
  createEvent,
  getEvents,
  deleteEvent,
  updateEvent,
  getSingleEvent,
};
