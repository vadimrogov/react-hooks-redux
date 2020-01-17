import React, { Component } from "react";

export class ItemCart extends Component {
  renderTags = () => {
    return this.props.item.tags.map(e => {
      return <div className="item-tag">{e}</div>;
    });
  };

  render() {
    const {
      item,
      removeItemFromCartHandler,
    } = this.props;

    return (
      <div className="ItemCart">
        <div className="item-header">
          <img className="item-picture" src={item.picture} alt='not found'/>
          <div>
            <div className="item-title">{item.title}</div>
            <div className="item-manufacturer">
              Manufacturer: {item.manufacturer}
            </div>
            <div className="item-tags">{this.renderTags()}</div>
          </div>
        </div>
        <div className="item-price">Price: ${item.price}</div>
        <button
          className="common-btn"
          onClick={() => removeItemFromCartHandler(item._id)}
        >
          Remove
        </button>
      </div>
    );
  }
}
