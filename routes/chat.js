const express = require("express");
const router = express.Router();
const Message = require("../models/Chat");

router.post("/postmessage", (req, res) => {
  const { user, message } = req.body;
  Message.create({
    content: message,
    postedBy: user._id
  })
    .then(newMessage => {
      res.json(newMessage);
    })
    .catch(err => console.log(err));
});

router.get("/feed", (req, res) => {
  Message.find()
    .populate("postedBy")
    .then(data => {
      res.json(data);
    })
    .catch(err => res.json(err));
});

module.exports = router;
