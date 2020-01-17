import React, { Component } from "react";
import { NavBtn } from "./NavBtn";
export class MenuBar extends Component {
  render() {
    return (
      <div className="main-nav">
        <div className="main-logo">
          <img
            src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LtZJGF3BnjoLSeYeXE_%2Favatar.png?generation=1574533428940402&alt=media"
            alt='not found'
            className="main-logo"
          />
          React+hooks+Redux
        </div>
        <NavBtn linkTo={"/"} linkName={"Shop"} />
        <NavBtn linkTo={"/terms-conditions"} linkName={"Terms Conditions"} />
        <NavBtn linkTo={"/about-us"} linkName={"About Us"} />
        <NavBtn linkTo={"/contact-us"} linkName={"Contact Us"} />
        <NavBtn
          linkTo={"/cart"}
          linkName={"Cart"}
          counter={this.props.counter}
        />
      </div>
    );
  }
}
