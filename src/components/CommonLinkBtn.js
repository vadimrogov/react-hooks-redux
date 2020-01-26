import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CommonLinkBtn extends Component {
  render() {
    const { linkTo, linkName } = this.props;

    return (
      <Link to={linkTo}>
        <button className="common-link-btn">{linkName}</button>
      </Link>
    );
  }
}
