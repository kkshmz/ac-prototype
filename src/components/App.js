/* global module */
//basically tells eslint to treat the module as a global object instead of a undefined variable
//basically tells eslint to treat the module as a global object instead of a undefined variable
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import * as THREE from "three";
import Menu from "./components/menu"

ReactDOM.render(<Menu />, document.getElementById('root'))
