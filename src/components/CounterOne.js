import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

export class ConterOne extends Component {

  render() {

    const {count,incrementCount,decrementCount} =this.props
    return <div>
            <p>userName- {this.props.username}</p>
            <p>Count- {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Dectrement</button>


    </div>;
  }
}
export default withCounter(ConterOne,15)