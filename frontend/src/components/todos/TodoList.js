import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTodos, deleteTodo, updateChecked } from "../../actions/todos";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  editChecked(id) {
    // this.setState((prevstate) => {
    const updatetodos = this.props.todos.map((todo) => {
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
    // });
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through",
    };

    return (
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div className="ui fluid search selection dropdown">
          <input type="hidden" name="country" />
          <i className="dropdown icon"></i>
          <div className="default text">Select Bucket</div>
          <div className="menu">
            <div className="item" data-value="af">
              <i className="af flag"></i>Afghanistan
            </div>
            <div className="item" data-value="ax">
              <i className="ax flag"></i>Aland Islands
            </div>
            <div className="item" data-value="al">
              <i className="al flag"></i>Albania
            </div>
            <div className="item" data-value="dz">
              <i className="dz flag"></i>Algeria
            </div>
            <div className="item" data-value="as">
              <i className="as flag"></i>American Samoa
            </div>
            <div className="item" data-value="ad">
              <i className="ad flag"></i>Andorra
            </div>
            <div className="item" data-value="ao">
              <i className="ao flag"></i>Angola
            </div>
            <div className="item" data-value="ai">
              <i className="ai flag"></i>Anguilla
            </div>
          </div>
        </div>

        <div
          className="ui very relaxed divided list"
          style={{ marginTop: "2rem" }}
        >
          {this.props.todos.map((todo) => (
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
                <div className="description">
                  {todo.created_at} <b>{todo.bucket_name}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
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
