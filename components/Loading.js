import React, { Component } from 'react'
import loading from 'newsapp/src/components/loading-gif.gif'
export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt='Loading...'/>
      </div>
    )
  }
}
