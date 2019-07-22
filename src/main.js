/* global module */
//basically tells eslint to treat the module as a global object instead of a undefined variable
//basically tells eslint to treat the module as a global object instead of a undefined variable
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Threeviewer from "./components/Threeviewer";


ReactDOM.render(<Layout/>, document.getElementById("root"));
// ReactDOM.render(<Header />, document.getElementById("root"));
// ReactDOM.render(<Threeviewer />, document.getElementById("viewer"));
