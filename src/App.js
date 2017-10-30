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
import FoodMarket from './FoodMarket.js'

class App extends Component {
  // score.js inside src 
  // add green div to score.js
  // add constructor 
  // init all state var to 100
  constructor(props) {
    super(props);
     this.state = {
      'cw': 1000,
      'sqft': 100,
      'gas': 20,
      'feed': 100,
      'waste': 50
    };
  }
  _updateScore = (key, value) => {
    //console.log('hello');
    const newVal = this.state[key] - value;
    //console.log(newVal);
    //console.log(this.state);
    const newState = {};
    newState[key]=newVal;
    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Earth Wallet</h1>
          <Container>
            <Row>
              <Col><Badge color="success">{this.state.cw}</Badge>Clean Water (gal)</Col>   
              <Col><Badge color="success">{this.state.sqft}</Badge>Land (sqft)</Col>
              <Col><Badge color="success">{this.state.gas}</Badge>Greenhouse gas (lbs)</Col>
              <Col><Badge color="success">{this.state.feed}</Badge>Animal feed (lbs)</Col>
              <Col><Badge color="success">{this.state.waste}</Badge>Animal waste (lbs)</Col>
            </Row>
          </Container>
        </header>
        <FoodMarket updateScore={this._updateScore}/>

      </div>
    );
  }
}

export default App;
