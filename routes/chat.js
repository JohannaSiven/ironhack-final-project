const express = require("express");
const router = express.Router();
//const Message = require("../models/Chat");
const Chat = require("../models/Chat")


/*-------------------------------------------------*/
// 1-1 CHAT ROOMS
// GET /api/chat --> all chats loggedin user is a member of

// router.get("/", (req, res) => {
//   Chat.find({})
//     .then(chat => {
//       res.json(chat);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// 1-1 CHAT ROOMS
// POST /api/chat --> open new chat between loggedin user and another member

// 1-1 CHAT ROOMS
// GET /api/chat/:id --> get chat between loggedin user and another member

// 1-1 CHAT ROOMS
// POST /api/chat/:id/new

// router.post("/postmessage", (req, res) => {
//   const { user, message } = req.body;
//   Message.create({
//     content: message,
//     postedBy: user._id
//   })
//     .then(newMessage => {
//       res.json(newMessage);
//     })
//     .catch(err => console.log(err));
// });

// router.get("/feed", (req, res) => {
//   Message.find()
//     .populate("postedBy")
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => res.json(err));
// });

// module.exports = router;
