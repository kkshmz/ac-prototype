import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class Button extends React.Component {
  onClick(event) {
    const value = event.target.value;

    console.log(value);
    console.log("this is the value" + value);
  }

  render() {
    return <button value={this.props.title} onClick={this.props.onClick}>{this.props.title}</button>;
  }
}
