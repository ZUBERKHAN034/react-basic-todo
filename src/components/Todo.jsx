import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          text: "Send Maill",
          id: 1,
          completed: false,
        },
        {
          text: "Send Video",
          id: 2,
          completed: false,
        },
        {
          text: "Send game",
          id: 3,
          completed: false,
        },
      ],
      currTask: "",
    };
    console.log(this.state.tasks, this.state.currTask);
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      currTask: value,
    });
  };

  handleSubmit = () => {
    const tasks = this.state.tasks;
    const text = this.state.currTask;
    const id = this.state.tasks.length + 1;
    this.setState({
      tasks: [...tasks, { text: text, id: id }],
      currTask: "",
    });
  };
  handleDelete = (id) => {
    const tasks = this.state.tasks;
    const newTasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: [...newTasks],
    });
  };
  render() {
    return (
      <center>
        <div>
          <input
            type="text"
            value={this.state.currTask}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
          <ul>
            {this.state.tasks.map((task) => (
              <li key={task.id}>
                <p>{task.text}</p>
                <button onClick={() => this.handleDelete(task.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </center>
    );
  }
}
