const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
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
//POST /api/chat/:id/new

router.post("/new", (req, res) => {
  const { sender, message_body, chatId } = req.body;
  console.log("server received: ", sender, message_body, chatId);
  Message.create({
    sender: sender,
    message_body: message_body
  })
    .then(newMessage => {
      Chat.findByIdAndUpdate(
        { _id: chatId },
        {
          $push: { messages: newMessage }
        },
        {
          new: true
        }
      )
        .populate("messages")
        .then(message => {
          res.send(message);
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
});

/*-------------------------------------------------*/
//POST /api/chat --> open new chat between loggedin user and another member
router.post("/", (req, res) => {
  const { activeUser, profileUser } = req.body;
  console.log("user1:", activeUser, "user2", profileUser);
  Chat.findOne({
    $and: [{ users: { $in: [activeUser] } }, { users: { $in: [profileUser] } }]
  })
    .then(chat => {
      if (chat) {
        console.log("chat found", chat);
        Chat.findById(chat._id)
          .populate("messages")
          .then(chat => {
            console.log("RETURNED", chat);
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

module.exports = router;
