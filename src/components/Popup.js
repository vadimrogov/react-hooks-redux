import React, { Component } from "react";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("mousedown", this.onClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.onClickOutside);
  }

  onClickOutside = e => {
    if (this.myRef && !this.myRef.current.contains(e.target)) {
      this.props.closePopupContentHandler();
    }
  };
  render() {
    const {
      popupHeader,
      renderPopupContentHandler,
      closePopupContentHandler
    } = this.props;
    return (
      <div className="popup-element page-element" ref={this.myRef}>
        <div className="popup-header">
          <h2> {popupHeader.toUpperCase()} </h2>
        </div>
        <div className="popup-body">
          <div>{renderPopupContentHandler()}</div>
        </div>
        <div className="popup-footer">
          <button
            className="common-btn"
            onClick={() => closePopupContentHandler()}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
