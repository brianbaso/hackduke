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


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Earth Wallet</h1>
          <Container>
            <Row>
              <Col><Badge color="success">100</Badge>Clean Water (gal)</Col>   
              <Col><Badge color="success">100</Badge>Land (sqft)</Col>
              <Col><Badge color="success">100</Badge>Greenhouse gas (lbs)</Col>
              <Col><Badge color="success">100</Badge>Animal feed (lbs)</Col>
              <Col><Badge color="success">100</Badge>Animal waste (lbs)</Col>
            </Row>
          </Container>
        </header>
        <body>
        <h2>Food Market</h2>
          <Container>
            <Row>
              <Col><img src={apple}/><br />Apple</Col>
              <Col><img src={bacon}/><br />Bacon</Col>
              <Col><img src={beans}/><br />Beans</Col>
              <Col><img src={chicken}/><br />Chicken</Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col><img src={corn}/><br />Corn</Col>
              <Col><img src={hamburger}/><br />Hamburger</Col>
              <Col><img src={lamb}/><br />Lamb chops</Col>
              <Col><img src={orange}/><br />Orange</Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col><img src={potato}/><br />Potato</Col>
              <Col><img src={rice}/><br />Rice</Col>
              <Col><img src={salad}/><br />Salad</Col>
              <Col><img src={tofu}/><br />Tofu</Col>
            </Row>
          </Container>
          
        </body>

      </div>
    );
  }
}

export default App;
