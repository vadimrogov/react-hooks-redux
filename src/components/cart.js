import React, { Component } from "react";
import { ItemCart } from "./ItemCart";
import { CommonLinkBtn } from "./CommonLinkBtn";

class Cart extends Component {
  renderItems = () => {
    return !!this.props.items.length
      ? this.props.items.map(e => {
          return (
            <ItemCart
              item={e}
              addItemToCartHandler={this.props.addItemToCartHandler}
              removeItemFromCartHandler={this.props.removeItemFromCartHandler}
            />
          );
        })
      : "Your cart is empty...";
  };

  calculatePrice = () => {
    let price = 0;
    this.props.items.forEach(element => {
      price += element.price;
    });
    return price.toFixed(2);
  };

  render() {
    return (
      <div className="page-body cart-page">
        <div className="cart-items-table page-element">
          {this.renderItems()}
        </div>
        <div className="cart-total-price-section page-element">
          <div>
            <h3>Total price:</h3>
            <div className="cart-total-price">${this.calculatePrice()}</div>
          </div>
          {!this.props.items.length ? (
            <CommonLinkBtn linkTo={"/"} linkName={"Back to shop"} />
          ) : (
            <CommonLinkBtn linkTo={"/checkout"} linkName={"Checkout"} />
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
