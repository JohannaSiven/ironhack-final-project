import React, { Component } from 'react'

export default class ChatForm extends Component {

  state = {
    message_body: ""
  }

  submitForm = (event) => {
    event.preventDefault()
    console.log("sent from chat form: ", this.state.message);
    this.props.sendMessage(this.state.message)
    this.setState({
      message_body: ""
    })
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
        <button type="submit">send</button>
      </form>
    )
  }
}
