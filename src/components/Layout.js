import React, { Component } from "react"
// import Header from "./Header"
import Button from "./custom/Button"
// import Footer from "./Footer";
import Threeviewer from "./Threeviewer";


export default class Layout extends Component {
   constructor(props){
      super(props);
      this.state ={
         title : "aasdf",
      };
      this.handleChange = this.handleChange.bind(this);
   }
   handleChange(e){
      e.preventDefault();
      const thetitle = e.target.value;
      this.setState({title: thetitle})
      console.log(thetitle)
   }
  render() {
    return (
      <React.Fragment>
        {this.state.title}
        <Button title="green" value="aa" onClick={this.handleChange} />
        <Button title="blue"/>
        <Button title="red"/>
        <Threeviewer/>
      </React.Fragment>
    );
  }
}
