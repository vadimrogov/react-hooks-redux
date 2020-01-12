import React, { Component } from "react";

class ContactUs extends Component {
  state = {
    email: "",
    msg: ""
  };

  changeEmailHandler = value =>
    this.setState({
      email: value
    });

  changeMessageHandler = value =>
    this.setState({
      msg: value
    });

  flushStateHandler = () =>
    this.setState({
      email: "",
      msg: ""
    });

  render() {
    return (
      <div className="page-body">
        <div className="page-element">
          <h2>CONTACT US</h2>
          E-mail:
          <input
            value={this.state.email}
            className="filter-small"
            onChange={e => this.changeEmailHandler(e.target.value)}
            placeholder="Enter your email"
          />
          Message:
          <textarea
            value={this.state.msg}
            className="input-field-large"
            onChange={e => this.changeMessageHandler(e.target.value)}
            placeholder="Enter your message..."
          />
          <button
            className="common-btn"
            onClick={() => this.flushStateHandler()}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default ContactUs;
