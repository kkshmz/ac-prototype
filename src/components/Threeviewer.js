import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

export default class Threeviewer extends Component {
  constructor(props){
  //   // let renderer = new THREE.WebGLRenderer();
  // }
  super(props);
    this.state = {
      color: "red"
    }
    this.handleColor = this.handleColor.bind(this)
  }
  
  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    this.camera.position.z = 5; // is used here to set some distance from a cube that is located at z = 0
    // OrbitControls allow a camera to orbit around the object
    // https://threejs.org/docs/#examples/controls/OrbitControls
    this.controls = new OrbitControls(this.camera, this.el);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement); // mount using React ref
  };
  animate(){

  }
  componentDidMount() {
    this.setupScene();
    // === THREE.JS CODE START ===
    this.scene = new THREE.Scene();

    var scene = new THREE.Scene();
    const fov = 60;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);


    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: this.state.color });
    console.log(this)
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    cube.material.color.set(this.state.color)
    // === THREE.JS EXAMPLE CODE END ===
  }
  handleColor(e){
    e.preventDefault();
    const thetitle = e.target.value;
    this.setState({color: thetitle})
    console.log(thetitle)
   
 }
  render() {
    return (
      <>
      <ColorButton title="blue" onClick={this.handleColor.bind(this)}/>
     </>
    )
  }
  handleChange(e){
    const value = e.target.value;
    this.props.changeColor(value);
  }
  changeColor(color){
    this.setState({color});
    console.log(this.state.color)
  }
  resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
}
export class ColorButton extends Component{
  onClick(event) {
    const value = event.target.value;

    console.log(value);
    console.log("this is the value" + value);
  }

  render() {
    return <button value={this.props.title} onClick={this.props.onClick}>{this.props.title}</button>;
  }
}