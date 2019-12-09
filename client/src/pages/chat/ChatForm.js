import React, { Component } from 'react'

export default class ChatForm extends Component {

  state = {
    message: ""
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.sendMessage(this.props.message)
    this.setState({
      message: ""
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
        <button type="submit"></button>
      </form>
    )
  }
}
