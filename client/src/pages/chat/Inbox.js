import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export class Inbox extends Component {
  state = {
    activeUser: this.props.user._id,
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
        this.setState({
          inboxItems: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*---------------------------------------*/
  // render the inbox list

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
                <NavLink to={`/inbox/${chat._id}`}>{chat.users}</NavLink>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Inbox;
