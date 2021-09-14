import React from "react";
import axios from "axios";
import Menu from "../components/Menu";
class MenuApp extends React.Component {
  state = {
    product: {},
    productId:{}
  };
  searchBook = () => {
    this.props.history.push("/products/" + this.state.productId);
  };
  onChangeSearch = (event) => {
    const copy = { ...this.state };
    copy.productId = event.target.value;
    this.setState(copy);
  };
  logOutButtonHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Menu
          onChangeSearch={this.onChangeSearch}
          searchProduct={() => this.searchBook()}
          logOutButtonHandler={this.logOutButtonHandler}
        ></Menu>
      </div>
    );
  }
}

export default MenuApp;
