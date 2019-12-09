const express = require("express");
const router = express.Router();
const Message = require("../models/Chat");
const Chat = require("../models/Chat");

/*-------------------------------------------------*/
//GET /api/chat --> all chats

router.get("/", (req, res) => {
  Chat.find({})
    .then(chat => {
      //--> check if one with given users exists
      res.json(chat); 
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*-------------------------------------------------*/
//POST /api/chat --> open new chat between loggedin user and another member
router.post("/", (req, res) => {
  Chat.create({
    users: [current_user_id, profile_id],
    message: {
      content: message,
      postedBy: user._id
    }
  })
    .then(chat => {
      res.json(chat);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*-------------------------------------------------*/
//GET /api/chat/:id --> get chat between loggedin user and another member

router.get("/:id", (req, res) => {
  Message.find()
    .populate("postedBy")
    .then(data => {
      res.json(data);
    })
    .catch(err => res.json(err));
});

/*-------------------------------------------------*/
//POST /api/chat/:id/new

router.post("/:id/new", (req, res) => {
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

module.exports = router;
