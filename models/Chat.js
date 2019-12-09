const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new mongoose.Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "message"
    }
  ],
  created_at: Date,
  updated_at: { type: Date, default: Date.now }
});

const messageSchema = new mongoose.Schema({
  chat: {
    type: Schema.Types.ObjectId,
    ref: "Chat"
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  message_body: String,
  message_status: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

const Chat = mongoose.model("Chat", chatSchema);
const Message = mongoose.model("Message", messageSchema);

module.exports = { Chat, Message };
