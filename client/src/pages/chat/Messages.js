import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    
       const postedByUser = this.props.message.user === this.props.user._id;

        return (
          <>
          {postedByUser ? (
                    <div>
                        <p>{this.props.message}</p>
                    </div> )
                 : (<div className='chat-bubble'>
                        <span>{this.props.message.user}</span>
                        <p>{this.props.message}</p>
                    </div>)
              }
              </>
        )
  }
}

