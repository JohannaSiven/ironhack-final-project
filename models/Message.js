const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  message_body: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", messageSchema);
