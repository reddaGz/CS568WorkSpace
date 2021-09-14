import logo from "./logo.svg";
import "./App.css";
import MenuApp from "./app/MenuApp";
import LoginApp from "./app/LoginApp";
import NewUserApp from "./app/NewUserApp";
import ProductApp from "./app/ProductsApp";
import NewProductApp from "./app/NewProductApp";
import AProduct from "./app/AProduct";
import updateProduct from "./app/UpdateProductApp";
import ProductDetailApp from "./app/ProductDetailApp";
import MainApp from "./app/MainApp";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from "react";
import SignUp from "./components/SignUp";
class App extends React.Component {
  state = {
    token: localStorage.getItem("token")

  };
  componentDidUpdate() {
     const copy={...this.state}
     copy.token=localStorage.getItem("token")
     this.setState(copy)
  }
  render() {
    return (
      <BrowserRouter>
        {this.state.token ? (
          <Route exact path="/" component={MenuApp}></Route>
        ) : (
          <Route exact path="/" component={LoginApp}></Route>
        )}

        <Route exact path="/signup" component={NewUserApp}></Route>
        <Route exact path="/view-products" component={ProductApp}></Route>
        <Route exact path="/view-products/:id" component={AProduct}></Route>
        <Route exact path="/create-product" component={NewProductApp}></Route>
        <Route
          exact
          path="/create-product/:id"
          component={updateProduct}
        ></Route>
        <Route
          exact
          path="/product-detail/:id"
          component={ProductDetailApp}
        ></Route>
      </BrowserRouter>
    );
  }
}

export default App;
