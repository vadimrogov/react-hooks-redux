import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CommonLinkBtn extends Component {
  render() {
    const { linkTo, linkName } = this.props;

    return (
      <Link to={linkTo}>
        <button className="CommonLinkBtn">{linkName}</button>
      </Link>
    );
  }
}
