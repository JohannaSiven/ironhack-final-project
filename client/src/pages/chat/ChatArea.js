import React, { Component } from 'react'
import Messages from "./Messages"

export default class ChatArea extends Component {

  render() {
    console.log("fron msgarea: ", this.props.feed);
    const messages = 
      this.props.feed.map((msg, i) => {
        return <Messages key={i} content={msg} user={this.props.user} />;
      });
    return (
      <div className="chat-area">
        <ul>{messages}</ul>
      </div>
    )
  }
}
