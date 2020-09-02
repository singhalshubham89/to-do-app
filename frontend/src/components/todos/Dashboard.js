import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

class Dashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>Todo Create Form</h1>
        <TodoCreate />
        <TodoList />
      </div>
    );
  }
}

export default Dashboard;
