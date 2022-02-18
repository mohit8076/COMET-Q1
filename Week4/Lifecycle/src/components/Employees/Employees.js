import React, { Component } from "react";

import Employee from "./Employee/Employee";

export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorNameF: "Mohit Chauhan",
      prevEmpArr : []
    };
   
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Employees : getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextPros, nextState) {
    console.log("Employees : shouldComponentUpdate");
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Employees : getSnapshotBeforeUpdate");

    return { "Before Deleting Employee": prevProps.employeesArr };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Employees : componentDidUpdate");
    this.state.prevEmpArr = snapshot;
  }

  render() {
    console.log("Employees : rendering");
    let empArr = this.state.prevEmpArr ? this.props.employeesArr : this.state.prevEmpArr


    return empArr.map((emp, index) => {
      return (
        <Employee
          myclick={(event) => this.props.myclick(event, index)}
          name={emp.name}
          exp={emp.exp}
          key={emp.id}
        />
      );
    });
  }
}
