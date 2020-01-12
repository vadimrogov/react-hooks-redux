import React, { Component } from "react";
import Shop from "./components/shop";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import TermsConditions from "./components/terms-conditions";
import Checkout from "./components/checkout";
import Cart from "./components/cart";
import { MenuBar } from "./components/menu-bar";
import { data, manufacturers } from "./db/db";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    items: data,
    cartItems: [],
    filter: {
      search: "",
      manufacturers: manufacturers,
      selectedManufacturers: []
    }
  };

  addItemToCartHandler = newItem => {
    this.setState({
      ...this.state,
      items: this.state.items.filter(e => {
        if (e._id === newItem._id) {
          e.selected = !e.selected;
        }
        return true;
      }),
      cartItems: this.state.cartItems.concat([newItem])
    });
  };

  removeItemFromCartHandler = id => {
    this.setState({
      ...this.state,
      items: this.state.items.filter(e => {
        if (e._id === id) {
          e.selected = !e.selected;
        }
        return true;
      }),
      cartItems: this.state.cartItems.filter(e => (e._id === id ? false : true))
    });
  };

  flushCartHandler = () => {
    this.setState({
      ...this.state,
      items: this.state.items.filter(e => {
        e.selected = false;
        return true;
      }),
      cartItems: []
    });
  };

  setSearchHandler = newValue => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        search: newValue
      }
    });
  };

  setManufacturerHandler = index => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        manufacturers: manufacturers.map((e, i) => {
          if (i === index) {
            e.selected = !e.selected;
          }
          return e;
        }),
        selectedManufacturers: manufacturers.filter(e => e.selected === true)
      }
    });
  };

  render() {
    return (
      <Router>
        <MenuBar
          currentPage={this.state.currentPage}
          setCurrentPageHandler={this.setCurrentPageHandler}
          counter={this.state.cartItems.length}
        />
        <Switch>
          <Route exact path="/">
            <Shop
              items={this.state.items}
              filter={this.state.filter}
              addItemToCartHandler={this.addItemToCartHandler}
              removeItemFromCartHandler={this.removeItemFromCartHandler}
              setSearchHandler={this.setSearchHandler}
              setManufacturerHandler={this.setManufacturerHandler}
            />
          </Route>
          <Route path="/cart">
            <Cart
              items={this.state.cartItems}
              addItemToCartHandler={this.addItemToCartHandler}
              removeItemFromCartHandler={this.removeItemFromCartHandler}
            />
          </Route>
          <Route path="/terms-conditions">
            <TermsConditions />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/checkout">
            <Checkout flushCartHandler={this.flushCartHandler} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
