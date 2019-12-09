import React, { Component } from "react";
import ChatArea from "./ChatArea";
import ChatForm from "./ChatForm";
import Axios from "axios";

export default class Chat extends Component {
  state = {
    feed: []
  };

  getFeed = () =>{
    Axios.post("/api/chat/").then(response =>
      {
      this.setState({
        feed: response.data
      })
    })
  }

  sendMessage = message => {
    if (!message) return false;

    Axios.post("/api/chat/postMessage", { user: this.props.user, message })
      .then(response => {
        this.setState({
          feed: [...this.state.feed, response.data]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount(){
    console.log("this.props", this.props);
    this.getFeed()
   
  }

  render() {
     
    return (
      <div>
        <ChatArea feed={this.state.feed} user={this.props.user}/>
        <ChatForm sendMessage={this.sendMessage} user={this.props.user} />
      </div>
    );
  }
}
