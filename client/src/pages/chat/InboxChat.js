import React, { Component } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";

// socket client for new messages
const endpoint = process.env.REACT_APP_SOCKET_PORT;
//const endpoint = "http://localhost:5555";
// const socket = socketIOClient(endpoint);
const socket = socketIOClient();

export class InboxChat extends Component {
  state = {
    messages: [],
    newMessage: "",
    // socketResponse: "", //socket
    chatId: this.props.match.params.id,
    activeUser: this.props.user
  };

  /*---------------------------------------*/
  // mount chat component and retrieve old messages from database

  componentDidMount() {
    if (this.props.match.params) {
      socket.on("message", msg => {
        console.log("socket received emitted msg:", msg);
        this.getInboxChat();
      });
      this.getInboxChat();
      console.log("component mounted");
    }
  }

  getInboxChat = () => {
    console.log("chatId found:", this.props.match.params.id);
    axios
      .post(`/api/chat/inbox/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          messages: res.data.messages
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log("getInbox()");

    // socket.on("message", msg => {
    //   console.log("socket received emitted msg:", msg);
    //   this.getInboxChat();
    // });
  };

  /*---------------------------------------*/
  // send new message to a chat

  handleChange = event => {
    this.setState({
      newMessage: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    console.log("chat form submit: ", this.state.newMessage);
    this.sendMessage(this.state.newMessage);
    this.setState({
      message_body: "",
      newMessage: ""
    });
  };

  sendMessage = message => {
    if (!message) return false;
    console.log("send msg to backend: ", message);
    axios
      .post(`/api/chat/new`, {
        sender: this.state.activeUser,
        message_body: message,
        chatId: this.state.chatId
      })
      .then(response => {
        const msg =
          response.data.messages[response.data.messages.length - 1]
            .message_body;
        console.log("new msg returned from db: ", msg);
        this.setState({
          messages: response.data.messages
        });
        socket.send(msg);
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*---------------------------------------*/
  // render chat and submit form

  render() {
    const conversation = this.state.messages;
    //console.log("RENDERING", this.state.messages);
    console.log("rendering");
    return (
      <div>
        {conversation.map((message, i) => {
          return (
            <div key={message._id + i}>
              <p>{message.created_at}</p>
              <p>{message.message_body}</p>
            </div>
          );
        })}
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="newMessage"
            value={this.state.newMessage}
            onChange={this.handleChange}
          />
          <button type="submit">send</button>
        </form>
      </div>
    );
  }
}

export default InboxChat;
