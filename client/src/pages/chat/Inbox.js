import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class Inbox extends Component {
  state = {
    activeUser: this.props.user,
    inboxItems: [],
    chatId: "",
  };

  /*---------------------------------------*/
  // mount inbox component and retrieve all user's chats from database

  componentDidMount = () => {
    console.log("component mount");
    this.getInbox();
  };

  getInbox = () => {
    const activeUser = this.state.activeUser;
    axios
      .post("/api/chat/inbox", {
        activeUser
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          inboxItems: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*---------------------------------------*/
  // render the inbox content

  render() {
    const inbox = this.state.inboxItems;
    console.log("INBOX", inbox);
    if (inbox.length === 0) {
      console.log("inbox empty");
      return (
        <>
          <h3>Your inbox is empty</h3>
          <p>Connect with people through their profiles</p>
        </>
      );
    } else if (inbox.length > 0) {
      console.log("render inbox");
      return (
        <div style={{ width: "50%" }}>
          {inbox.map(chat => {
            return (
              <div key={chat._id} style={{ border: "1px solid black" }}>
                <NavLink to={`/inbox/${chat._id}`}>You and {chat.users[1].username}</NavLink>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Inbox;
