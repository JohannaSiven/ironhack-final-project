import React, { Component } from 'react'
import Messages from "./Messages"

export default class ChatArea extends Component {

  render() {
    const messages =
      this.props.feed &&
      this.props.feed.map((x, i) => {
        return <Messages key={i} content={x} user={this.props.user} />;
      });
    return (
      <div className="chat-area">
        <ul>{messages}</ul>
      </div>
    )
  }
}
