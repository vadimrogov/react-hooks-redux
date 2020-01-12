import React, { Component, Fragment } from "react";

export class Filter extends Component {
  renderManufacturers = () => {
    return this.props.filters.manufacturers.map((e, i) => {
      return (
        <div className="filter-manufacturer">
          <input
            type="checkbox"
            value={e.selected}
            onChange={() => this.props.setManufacturerHandler(i)}
          />
          {e.name}
        </div>
      );
    });
  };
  render() {
    const { setSearchHandler } = this.props;

    return (
      <Fragment>
        <input
          className="filter-search"
          onChange={e => setSearchHandler(e.target.value)}
          placeholder="Search"
        />
        <div>
          Manufacturer:
          <div>{this.renderManufacturers()}</div>
        </div>
      </Fragment>
    );
  }
}
