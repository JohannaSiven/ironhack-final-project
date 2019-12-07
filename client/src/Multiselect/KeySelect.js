import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";

import { keyWords } from "./Keywords";

export default class KeySelect extends Component {
  state = {
    keyWords: keyWords
  };

  // componentDidMount() {
  //   this.setState({
  //     keyWords: keyWords
  //   });
  // }
  render() {
    return (
      <Multiselect
        options={this.state.keyWords}
        onSelect={this.props.onSelect}
        onRemove={this.props.onRemove}
        displayValue="name"
      />
    );
  }
}
