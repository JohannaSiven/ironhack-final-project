import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ChatList } from "./styles";

export class Inbox extends Component {
  state = {
    activeUser: this.props.user,
    inboxItems: [],
    chatId: ""
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
      console.log("user id", this.state.activeUser);
      return (
        <ChatList>
          {inbox.map(chat => {
            return chat.users.map(user => {
              return (
                user.username !== this.state.activeUser.username && (
                  <NavLink
                    key={chat._id}
                    to={`/inbox/${chat._id}`}
                    otherUser={user}
                    style={{ border: "1px solid black" }}
                  >
                    <img src={user.photo} alt={user.username} />
                    <div className="message">
                      <h2>{user.username}</h2>
                      <div className="lastMessages">
                        <small className="time">
                          {chat.messages[
                            chat.messages.length - 1
                          ].created_at.slice(11, 16)}
                          :
                        </small>
                        <small>
                          {chat.messages[
                            chat.messages.length - 1
                          ].message_body.slice(0, 25)}
                          ...
                        </small>
                      </div>
                    </div>
                  </NavLink>
                )
              );
            });
          })}
        </ChatList>
      );
    }
  }
}

export default Inbox;
