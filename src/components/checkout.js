import React, { Component } from "react";
import { CommonBtn } from "./common-link-btn";

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
            <CommonBtn linkTo={"/"} linkName={"Back to shop"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
