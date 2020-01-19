import React, { Component } from "react";
import { CommonLinkBtn } from "./CommonLinkBtn";

class Checkout extends Component {
  componentDidMount() {
    this.props.flushCartHandler();
  }
  render() {
    return (
      <div className="page-body">
        <div className="page-element">
          <div className="checkout-page">
            <h2>Successful!</h2>
            <CommonLinkBtn linkTo={"/"} linkName={"Back to shop"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
