import React, { Component } from "react";
import axios from "axios";

export class InboxChat extends Component {
  state = {
    messages: [],
    newMessage: "",
    chatId: this.props.match.params.id,
    activeUser: this.props.user
  };

  /*---------------------------------------*/
  // mount chat component and retrieve old messages from database

  componentDidMount() {
    if (this.props.match.params) {
      this.getInboxChat();
    }
  }

  getInboxChat = () => {
    console.log("this chatId:", this.props.match.params.id);
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
  };

  /*---------------------------------------*/
  // send new message to the database

  handleChange = event => {
    this.setState({
      newMessage: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    console.log("sent from chat form: ", this.state.newMessage);
    this.sendMessage(this.state.newMessage);
    this.setState({
      message_body: ""
    });
  };

  sendMessage = message => {
    if (!message) return false;
    console.log("newMessage being sent with axios: ", message);
    axios
      .post(`/api/chat/new`, {
        sender: this.state.activeUser,
        message_body: message,
        chatId: this.state.chatId
      })
      .then(response => {
        this.setState({
          messages: [...this.state.messages, response.data.messages]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*---------------------------------------*/
  // render chat and submit form

  render() {
    const conversation = this.state.messages;
    return (
      // const messages =
      // this.props.feed.map((msg, i) => {
      //   return <Messages key={i} content={msg} user={this.props.user} />;
      // });

      <div>
        {conversation.map(message => {
          return (
            <div key={message._id}>
              <p>message: {message.message_body}</p>
              <p>sender: {message.sender}</p>
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
