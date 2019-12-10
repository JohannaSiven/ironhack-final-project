import React, { Component } from "react";
import ChatArea from "./ChatArea";
import ChatForm from "./ChatForm";
import axios from "axios";

export default class Chat extends Component {
  state = {
    chatId: "",
    users: [],
    feed: [],
    activeUser: "",
    profileUser: ""
  };

  getChat = (activeUser, profileUser) => {
    console.log("users inside getChat", profileUser, activeUser);
    axios
      .post("/api/chat", {
        activeUser,
        profileUser
      })
      .then(response => {
        this.setState({
          chatId: response.data._id,
          feed: response.data.messages,
          users: response.data.users
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  sendMessage = message => {
    if (!message) return false;
    console.log("???", this.state);

    axios
      .post(`/api/chat/new`, {
        sender: this.state.activeUser,
        message_body: message,
        chatId: this.state.chatId
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          feed: [...this.state.feed, response.data.messages]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    const { activeUser, profileUser } = this.props.location.state;
    this.setState({
      profileUser: profileUser,
      activeUser: activeUser
    });
    this.getChat(activeUser, profileUser);
  }

  render() {
    console.log(this.props.location.state);
    console.log(
      "this.state after render:",
      "feed:",
      this.state.feed,
      "chatId:",
      this.state.chatId,
      "users:",
      this.state.profileUser, this.state.activeUser
    );
    return (
      <div>
        <ChatArea feed={this.state.feed} user={this.props.user} />
        <ChatForm sendMessage={this.sendMessage} user={this.props.user} />
      </div>
    );
  }
}
