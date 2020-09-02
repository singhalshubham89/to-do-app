import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTodos, deleteTodo, updateChecked } from "../../actions/todos";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
    this.editChecked = this.editChecked.bind(this);
  }
  componentDidMount() {
    this.props.getTodos().then(() => {
      this.setState(() => {
        return {
          todos: this.props.todos,
        };
      });
    });
  }

  editChecked(id) {
    this.setState((prevstate) => {
      const updatetodos = prevstate.todos.map((todo) => {
        if (todo.id === id) {
          todo.iscompleted = !todo.iscompleted;
          const formData = new FormData();
          Object.keys(todo).forEach((key) => {
            formData.append(key, todo[key]);
          });
          this.props.updateChecked(id, formData);
        }
        return todo;
      });
      return {
        todos: updatetodos,
      };
    });
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through",
    };

    return (
      <div
        className="ui very relaxed divided list"
        style={{ marginTop: "2rem" }}
      >
        {this.state.todos.map((todo) => (
          <div
            className="item"
            key={todo.id}
            style={todo.iscompleted ? completedStyle : null}
          >
            <div className="right floated content">
              {" "}
              <Link
                to={`/delete/${todo.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>

            <div className="content">
              <input
                type="checkbox"
                className="ui checkbox left floated"
                defaultChecked={todo.iscompleted}
                id={todo.id}
                value={todo.iscompleted}
                onChange={() => this.editChecked(todo.id)}
              />
              <Link to={`/edit/${todo.id}`} className="header">
                {todo.task}
              </Link>
              <div className="description">{todo.created_at}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: Object.values(state.todos),
});

export default connect(mapStateToProps, {
  getTodos,
  deleteTodo,
  updateChecked,
})(TodoList);
