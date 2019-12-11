const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const Chat = require("../models/Chat");

/*-------------------------------------------------*/
//POST /api/chat/inbox --> load user's inbox content

router.post("/inbox", (req, res) => {
  const { activeUser } = req.body;
  console.log("### user to match:", activeUser._id);
  Chat.find({ users: { $in: [activeUser._id] } })
    .populate("messages users")
    .then(chats => {
      console.log("### inbox content found:", chats);
      res.send(chats);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*-------------------------------------------------*/
//POST /api/chat/inbox/:id --> load chat content

router.post("/inbox/:id", (req, res) => {
  console.log("### chat to retrieve:", req.params.id);
  Chat.findById({ _id: req.params.id })
    .populate("messages")
    //.populate({ path: "users messages", populate: { path: "sender" } })
    .then(chat => {
      console.log("### chat content found");
      res.send(chat);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

/*-------------------------------------------------*/
//POST /api/chat/:id/new --> post new message to chat

router.post("/new", (req, res) => {
  const { sender, message_body, chatId } = req.body;
  console.log("### new message to create: ", message_body);
  Message.create({
    sender: sender,
    message_body: message_body
  })
    .then(newMessage => {
      console.log("### new message created in db: ", newMessage);
      Chat.findByIdAndUpdate(
        { _id: chatId },
        {
          $push: { messages: newMessage }
        },
        {
          new: true
        }
      )
        .populate({ path: "users messages", populate: { path: "sender" } })
        .then(chatDocument => {
          console.log("### new message added to chat document", chatDocument);
          res.json(chatDocument);
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
//POST /api/chat --> open chat between loggedin user and another member

router.post("/", (req, res) => {
  const { activeUser, profileUser } = req.body;
  console.log("### user1:", activeUser, "user2", profileUser);
  Chat.findOne({
    $and: [{ users: { $in: [activeUser] } }, { users: { $in: [profileUser] } }]
  })
    .then(chat => {
      if (chat) {
        console.log("### chat found", chat.users);
        Chat.findById(chat._id)
          .populate("messages")
          .populate("users")
          .then(chat => {
            res.json(chat);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      } else if (!chat) {
        console.log("### chat not found --> create");
        Chat.create({
          users: [activeUser, profileUser]
        })
          .then(chat => {
            console.log("### chat created", chat._id);
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

module.exports = router;
