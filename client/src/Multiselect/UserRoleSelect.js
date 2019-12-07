import { Multiselect } from "multiselect-react-dropdown";
import React, { Component } from "react";

class UserRoleSelect extends Component {
  state = {
    options: [
      { name: "Frontend Developer" },
      { name: "Backend Developer" },
      { name: "Fullstack Developer" },
      { name: "Mobile Developer" },
      { name: "UI/UX Designer" },
      { name: "Project Manager" },
      { name: "Data Analyst" },
      { name: "Quality Assurance" },
      { name: "Software Tester" },
      { name: "Other" }
    ],
    selectedValue: ""
  };

  componentDidMount() {
    this.setState({
      selectedValue: [this.props.role]
    });
  }

  render() {
    const { role } = this.props;
    console.log([this.props.role]);
    return (
      <Multiselect
        options={this.state.options}
        onSelect={this.props.onSelect}
        onRemove={this.props.onRemove}
        selectedValues={[role]}
        // value={this.props.role}
        // selectionLimit={1}
        displayValue="name"
      />
    );
  }
}

export default UserRoleSelect;
