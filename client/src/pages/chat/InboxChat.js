import React, { Component } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import { Container } from "./styles";

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
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getInboxChat();
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
        console.log("!!!!!", response.data);
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
    console.log("RENDERING", this.state.messages);
    console.log("rendering", this.state.activeUser._id);
    console.log(this.props);
    return (
      <Container>
        <div className="main">
          <div className="bg-header" />
          <div className="chatHeader">
            <h1>CHAT</h1>
          </div>
          <div className="container">
            <div className="chat">
              {conversation.map((message, i) => {
                return (
                  <div key={message._id + i}>
                    {message.sender !== this.state.activeUser._id ? (
                      <div className="leftSide">
                        <p>{message.message_body}</p>
                        <small>{message.created_at.slice(11, 16)}</small>
                      </div>
                    ) : (
                      <div className="rightSide">
                        <p>{message.message_body}</p>
                        <small>{message.created_at.slice(11, 16)}</small>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <form onSubmit={this.submitForm}>
              <textarea
                type="text"
                name="newMessage"
                value={this.state.newMessage}
                onChange={this.handleChange}
              />
              <button type="submit" className="sendButton">
                send
              </button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default InboxChat;
