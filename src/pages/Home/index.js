/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  onClick = () => {
    this.props.history.push('/about')
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Home</h1>
        <a className="title" onClick={() => this.onClick()}> class Click </a>
      </div>
    )
  }
}

export default Home
