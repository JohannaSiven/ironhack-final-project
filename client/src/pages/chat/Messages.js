import React, { Component } from 'react'

export default class Message extends Component {
  render() {

      const postedByUser = this.props.content.sender === this.props.user._id;

        return (
          <>
          {postedByUser ? (
                    <div>
                        <p>{this.props.content.message_body}</p>
                    </div> )
                 : (<div className='chat-bubble'>
                        <span>{this.props.content.sender}</span>
                        <p>{this.props.content.message_body}</p>
                    </div>)
              }
              </>
        )
  }
}

