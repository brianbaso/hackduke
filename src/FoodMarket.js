import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';
import apple from './img/apple.png'
import bacon from './img/bacon.png'
import beans from './img/beans.png'
import chicken from './img/chicken.png'
import corn from './img/corn.jpeg'
import hamburger from './img/hamburger.png'
import lamb from './img/lamb.png'
import orange from './img/orange.png'
import potato from './img/potato.png'
import rice from './img/rice.png'
import salad from './img/salad.jpeg'
import tofu from './img/tofu.jpeg'


class FoodMarket extends Component {
  // score.js inside src 
  // add green div to score.js
  // add constructor 
  // init all state var to 100

  render() {
    return (
        <body>
        <h2>Food Market</h2>
          <Container>
            <Row>
              <Col><button onClick={()=>{
                this.props.updateScore('cw',33);
                this.props.updateScore('sqft',1);
              }}><img src={apple}/><br />Apple</button></Col>

              <Col><button onClick={()=>{
                this.props.updateScore('cw',180);
                this.props.updateScore('sqft',3);
                this.props.updateScore('gas', 1);
                this.props.updateScore('feed', 2);
                this.props.updateScore('waste', 4);
              }}><img src={bacon}/><br />Bacon</button></Col>

              <Col><button onClick={()=>{
                this.props.updateScore('cw',176);
                this.props.updateScore('sqft',2);
              }}><img src={beans}/><br />Beans</button></Col>

              <Col><button onClick={()=>{
                this.props.updateScore('cw',130);
                this.props.updateScore('sqft',2);
                this.props.updateScore('gas', 1);
                this.props.updateScore('feed', 2);
                this.props.updateScore('waste', 2);
              }}><img src={chicken}/><br />Chicken</button></Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col><button onClick={()=>{
                this.props.updateScore('cw',25);
                this.props.updateScore('sqft',3);
              }}><img src={corn}/><br />Corn</button></Col>

              <Col><button onClick={()=>{
                this.props.updateScore('cw',462);
                this.props.updateScore('sqft',39);
                this.props.updateScore('gas', 13);
                this.props.updateScore('feed', 30);
                this.props.updateScore('waste', 19);
              }}><img src={hamburger}/><br />Hamburger</button></Col>

              <Col><button onClick={()=>{
                this.props.updateScore('cw',312);
                this.props.updateScore('sqft',7);
                this.props.updateScore('gas', 1);
                this.props.updateScore('feed', 5);
                this.props.updateScore('waste', 4);
              }}><img src={lamb}/><br />Lamb Chops</button></Col>

              <Col><button onClick={()=>{
                this.props.updateScore('cw',33);
                this.props.updateScore('sqft',1);
              }}><img src={orange}/><br />Orange</button></Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col><button onClick={()=>{
                this.props.updateScore('cw',30);
                this.props.updateScore('sqft',3);
              }}><img src={potato}/><br />Potato</button></Col>

              <Col><button onClick={()=>{
                this.props.updateScore('cw',70);
                this.props.updateScore('sqft',1);
              }}><img src={rice}/><br />Rice</button></Col>


              <Col><button onClick={()=>{
                this.props.updateScore('cw',25);
                this.props.updateScore('sqft',1);
              }}><img src={salad}/><br />Salad</button></Col>
              <Col><button onClick={()=>{
                this.props.updateScore('cw',75);
                this.props.updateScore('sqft',1);
              }}><img src={tofu}/><br /><br />Tofu</button></Col>
            </Row>
          </Container>
          
       </body>
    );
  }
}

export default FoodMarket;
