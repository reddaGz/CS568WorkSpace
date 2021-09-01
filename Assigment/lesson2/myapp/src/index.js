import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Component1 from "./componenets/component1";
import Greeting from "./componenets/greeting";
import Fragment from "./componenets/fragmentComponenet";
import ArrayComponent from "./componenets/arrayComponent";
import DivComponents from "./componenets/divGroup";
import reportWebVitals from "./reportWebVitals";
import FunctionalComponenet from "./componenets/functionaComponenet"
import ClassComponenet from "./componenets/classComponent"
ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr />
    <Component1 />
    <hr />
    <Greeting />
    <hr />
    <DivComponents />
    <hr />
    <ArrayComponent />
    <hr />
    <Fragment />
    <FunctionalComponenet/>
    <ClassComponenet/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
