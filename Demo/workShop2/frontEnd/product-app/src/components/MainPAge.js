import React from "react";
import { Link } from "react-router-dom";
export default function MainPage(props) {
  return (
    <div id="navigation_page">
      <div className="menu">
        <ul>
          <li>
            <Link className="navbarBrand">
              <b>
                <h6>Product App</h6>
              </b>
            </Link>
          </li>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="navItem">
            <button
              className="btn btn-danger"
              aria-current="page"
              onClick={props.loginPage}
            >
              Log in
            </button>
          </li>
          <li className="navItem">
            <button
              class="btn btn-primary"
              onClick={props.newUserButtonHandler}
            >
              Create new account
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
