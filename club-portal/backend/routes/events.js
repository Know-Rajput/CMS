const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

router.post("/create", async (req, res) => {

    const event = new Event(req.body);
    await event.save();

    res.json({ message: "Event Created"});
});

router.get("/", async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

router.post("/join/:id", async(req,res) => {
    const { email } = req.body;
    const event = await Event.findById(req.params.id);
    event.participants.push(email);
    await event.save();

    res.json({ message: "Joined Event" });
});

module.exports = router;