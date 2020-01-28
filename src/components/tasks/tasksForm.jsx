import React, { Component } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import ModalAlert from "./modal";
import "react-datepicker/dist/react-datepicker.css";

export default class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.task ? props.task.name : "",
      type: props.task ? props.task.type : "Code",
      day: props.task ? moment(props.task.day) : moment(),
      time: props.task ? props.task.time : "",
      createdAt: props.task ? moment(props.task.createdAt) : moment(),
      selectedTask: undefined
    };
  }

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onDateChange = day => {
    if (!day) {
      this.setState(() => ({ day: moment() }));
    } else {
      this.setState(() => ({ day }));
    }
  };

  onTimeChange = e => {
    const time = e.target.value;
    this.setState(() => ({ time }));
  };

  onTypeChange = e => {
    const type = e.target.value;
    this.setState(() => ({ type }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (
      !this.state.name ||
      !this.state.day ||
      !this.state.type ||
      !this.state.time
    ) {
      this.setState(() => ({ selectedTask: "Fill in all the fields" }));
    } else {
      this.props.onSubmit({
        name: this.state.name,
        type: this.state.type,
        day: this.state.day.valueOf(),
        time: this.state.time,
        createdAt: this.state.createdAt.valueOf()
      });
      e.target.type.value = "";
      this.setState(() => ({
        name: "",
        type: "Code",
        day: moment(),
        time: ""
      }));
    }
  };

  closeModal = () => {
    this.setState(() => ({ selectedTask: undefined }));
  };
  render() {
    return (
      <div className="card">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="column xlarge-3 small-12">
              <div className="input-field purple-input">
                <span className="task-icon"></span>
                <input
                  data-testid="TaskValue"
                  type="text"
                  placeholder="Enter a new task"
                  autoComplete="off"
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
              </div>
            </div>
            <div className="column xlarge-3 small-12">
              <div className="input-field purple-input">
                <select
                  data-testid="TaskType"
                  name="type"
                  onChange={this.onTypeChange}
                  value={this.state.type}
                >
                  <option defaultValue value="Code">
                    Code
                  </option>
                  <option value="Design">Design</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="column xlarge-3 small-12">
              <div className="input-field purple-input">
                <DatePicker
                  data-testid="TaskDate"
                  placeholderText="Choose date"
                  todayButton={"Today"}
                  selected={this.state.day}
                  onChange={this.onDateChange}
                  minDate={moment()}
                />
              </div>
            </div>
            <div className="column xlarge-3 small-12">
              <div className="input-field purple-input">
                <input
                  data-testid="TaskTime"
                  type="time"
                  name="time"
                  value={this.state.time}
                  onChange={this.onTimeChange}
                />
              </div>
            </div>
          </div>
          <div className="center-text">
            <button
              type="submit"
              className="btn btn-rounded btn-outlined purple-btn"
            >
              Submit
            </button>
          </div>
        </form>
        <ModalAlert
          selectedTask={this.state.selectedTask}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}
