import React, { Component }  from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Menu from "./nav/Nav";


export default class Header extends Component {
   handleChange(e){
      const title = e.target.value;
      this.props.changeTitle();

   }
  render() {
    return <Menu />;
  }
}
