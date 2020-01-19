import React, { Component, Fragment } from "react";
import Popup from "./Popup";

class ContactUs extends Component {
  state = {
    email: "",
    msg: "",
    popupActive: false,
    formDataHasError: false
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

  showPopup = (showError = false) =>
    this.setState({
      popupActive: true,
      formDataHasError: showError
    });

  closePopupHandler = () => {
    this.setState({
      popupActive: false
    });
  };

  sendContactForm = () => {
    if (!(this.state.email.trim() && this.state.msg.trim())) {
      this.showPopup(true);
    } else {
      this.showPopup();
      this.flushStateHandler();
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.popupActive &&
          (!this.state.formDataHasError ? (
            <Popup
              popupHeader={"Server say:"}
              renderPopupContentHandler={() => (
                <img
                  className="img-responsive"
                  src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LtZJGF3BnjoLSeYeXE_%2F-LuOTLcQnAaCxuZPlxc2%2F-LuOVsoiOc6D7i8HNglF%2F2300883_3.jpg?alt=media&token=0c6d76e7-f6d9-4c08-ab92-5d7032935575"
                  alt="no"
                />
              )}
              closePopupContentHandler={this.closePopupHandler}
            />
          ) : (
            <Popup
              popupHeader={"Server say:"}
              renderPopupContentHandler={() => "Server sent an error"}
              closePopupContentHandler={this.closePopupHandler}
            />
          ))}
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
              onClick={() => this.sendContactForm()}
            >
              Send
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactUs;
