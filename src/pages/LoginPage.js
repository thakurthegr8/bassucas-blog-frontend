import React, { Component } from "react";
import axios from "axios";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { identifier, password } = this.state;
    console.log(this.state);
    axios
      .post("http://localhost:4000/server/login", {
        identifier: identifier,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="container mx-auto md:w-1/3 md:px-0 flex flex-col px-4 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl my-4">Login</h1>
        <form
          className="flex flex-col mx-auto container space-y-2 min-h-screen "
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter email..."
            className="border p-2 border-black rounded bg-white"
            name="identifier"
            onChange={this.handleChange}
            value={this.state.identifier}
            required
          />
          <input
            type="text"
            placeholder="Enter password..."
            className="border p-2 border-black rounded bg-white"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <button className="border p-2 border-black rounded bg-black text-white font-semibold">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
