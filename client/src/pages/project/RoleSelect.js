import { Multiselect } from "multiselect-react-dropdown";
import React, { Component } from "react";

class RoleSelect extends Component {
  state = {
    options: [
      { name: "Frontend Developer", open: true },
      { name: "Backend Developer", open: true },
      { name: "Fullstack Developer", open: true },
      { name: "Mobile Developer", open: true },
      { name: "UI/UX Designer", open: true },
      { name: "Project Manager", open: true },
      { name: "Data Analyst", open: true },
      { name: "Quality Assurance", open: true },
      { name: "Software Tester", open: true },
      { name: "Other", open: true }
    ]
  };

  render() {
    return (
      <Multiselect
        options={this.state.options}
        onSelect={this.props.onSelect}
        onRemove={this.props.onRemove}
        displayValue="name"
       
      />
    );
  }
}

export default RoleSelect;
