/* const mongoose = require("mongoose")
const Schema = mongoose.Schema


const room = new mongoose.Schema({
    users: [String],
    messages: {
      type: Schema.Types.ObjectId,
      ref: "message"},
    created_at: Date,
    updated_at: { type: Date, default: Date.now }
  })


const message = new mongoose.Schema({
    room: room,
    user: user,
    message_body: String,
    message_status:{type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
});

const Room = mongoose.model("Room", room);
const Message = mongoose.model("Message", message);

module.exports = {Room, Message} */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    content: String,
    postedBy: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;