import React from 'react'
import withCounter from '../hoc/withCounter'

function CounterThree({count,incrementCount,decrementCount,}) {
  return (
    <div>

         <p>count- ({count})</p>
<button onClick={incrementCount}>increment</button>
<button onClick={decrementCount}>decrement</button>


    </div>
  )
}

export default withCounter(CounterThree,5)
