const express = require("express");
const router = express.Router();
const Message = require("../models/Chat");
const Chat = require("../models/Chat");

/*-------------------------------------------------*/
//GET /api/chat --> all chats

router.get("/", (req, res) => {
  const { activeUser, profileUser } = req.params;
  console.log(req.params);
  Chat.find({})
    .then(chat => {
      res.json(chat);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*-------------------------------------------------*/
//POST /api/chat --> open new chat between loggedin user and another member
router.post("/", (req, res) => {
  const { activeUser, profileUser } = req.body;
  console.log("user1:", activeUser, "user2", profileUser);
  Chat.findOne({
    users: { $in: [activeUser], $in: [profileUser] }
  })
    .then(chat => {
      if (chat) {
        console.log("chat found");
        Chat.findById(chat._id)
          //.populate("messages")
          .then(chat => {
            res.json(chat);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      } else if (!chat) {
        console.log("chat not found --> create");
        Chat.create({
          users: [activeUser, profileUser]
        })
          .then(chat => {
            res.json(chat);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*-------------------------------------------------*/
//GET /api/chat/:id --> get chat between loggedin user and another member

// router.get("/:id", (req, res) => {
//   Message.find()
//     .populate("postedBy")
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => res.json(err));
// });

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
