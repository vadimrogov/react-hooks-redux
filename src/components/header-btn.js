import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBtn extends Component {
  render() {
    const { linkTo, linkName, counter } = this.props;

    return (
      <Link to={linkTo} className="nav-link">
        <button className="nav-btn">
          {!!counter && <div className="nav-counter">{counter}</div>}
          {linkName}
        </button>
      </Link>
    );
  }
}
