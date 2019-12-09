const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chat = new mongoose.Schema({
  users: [String],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "message"
    }
  ],
  created_at: Date,
  updated_at: { type: Date, default: Date.now }
});

const message = new mongoose.Schema({
  chat: [
    {
      type: Schema.Types.ObjectId,
      ref: "chat"
    }
  ],
  user: String,
  message_body: String,
  created_at: { type: Date, default: Date.now }
});

const Chat = mongoose.model("Chat", chat);
const Message = mongoose.model("Message", message);

module.exports = { Chat, Message };
