import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
  constructor(props) {
    super()
    this.state = {
      event: props.onDelayedClick
    }
  }

  setTimeout = (event) => {
    event.persist()
    let t = setInterval(() => {
      this.props.onDelayedClick(event)
      clearTimeout(t)
    }, this.props.delay)
  }
  render() {
    return (
      <button onClick={this.setTimeout}>Test Delay</button>
    )
  }
  
}
