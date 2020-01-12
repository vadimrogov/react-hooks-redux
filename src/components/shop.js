import React, { Component } from "react";
import { ItemShop } from "./item-shop";
import { Filter } from "./filter";

class Shop extends Component {
  renderItems = () => {
    const { filter, items } = this.props;
    return items.map(e => {
      const searchMatch =
        e.title.toUpperCase().search(filter.search.toUpperCase()) !== -1;
      const manufacturersSelected = !!filter.selectedManufacturers.length;
      const manufacturersMatch =
        manufacturersSelected &&
        !!filter.selectedManufacturers.filter(m => m.name === e.manufacturer)
          .length;

      return (
        ((searchMatch && !manufacturersSelected) ||
          (searchMatch && manufacturersMatch)) && (
          <ItemShop
            key={e._id}
            item={e}
            addItemToCartHandler={this.props.addItemToCartHandler}
            removeItemFromCartHandler={this.props.removeItemFromCartHandler}
          />
        )
      );
    });
  };

  render() {
    return (
      <div className="page-body shop-page">
        <div className="shop-items-filter-settings page-element">
          <Filter
            filters={this.props.filter}
            setSearchHandler={this.props.setSearchHandler}
            setManufacturerHandler={this.props.setManufacturerHandler}
          />
        </div>
        <div className="shop-items-table">{this.renderItems()}</div>
      </div>
    );
  }
}

export default Shop;
