import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  btnClick = (e) => {
    this.setState({
      data: [e.clientX, e.clientY]
    })    
  }
  
  render() {
    return (
     <button onClick={this.btnClick} log={this.props.onReceiveCoordinates(this.state.data)} >Test</button>
    )
  }
  
}