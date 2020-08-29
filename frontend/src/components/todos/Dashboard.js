import React, { Component } from "react";
import TodoList from "./TodoList";

class Dashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <div>Todo Create Form</div>
        <TodoList />
      </div>
    );
  }
}

export default Dashboard;
