import React, { Component } from "react";

import "./Employee.css";

export default class Employee extends Component {

  render() {
    return (
      <div className="Employee">
        <p>
          {" "}
          I am <b>{this.props.name}</b> Mohit Chauhan Employee,{" "}
        </p>
        <p>
          <b>{this.props.exp}</b> years of experience.{" "}
        </p>
        <button onClick={this.props.myclick}> Delete Me!</button>
      </div>
    );
  }
}
