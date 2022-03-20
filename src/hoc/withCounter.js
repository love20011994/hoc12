// import React, { Component } from 'react';
// function withCounter(PassedComponent,initialCount=0){
    
    
//   class WrappedComponent extends Component {

//         state={
//             count : initialCount
//         }

//         incrementCount = ()=>{
//             this.setState({
//                 count: this.state.count +1
//             })
//         }

//         decrementCount = ()=>{
//             this.setState({
//                 count: this.state.count -1
//             })
//         }

//       render() {
//         return  <PassedComponent 
//             count = {this.state.count}
//         incrementCount ={this.incrementCount}
//         decrementCount = {this.decrementCount}

//             // pros passed when component is called or rendered

//             {...this.props}  />
           
            
//         }

                              
          
//       }
//       return WrappedComponent
       
//     }
    



// export default  withCounter

import React from 'react'
import { Component } from 'react/cjs/react.production.min'

function withCounter(PassedComponent,initialCount) {
    class WrappedComponent extends Component{
        state ={
            count:initialCount
        }

        incrementCount=()=>{
            this.setState({count:this.state.count+1})
        }
        decrementCount=()=>{
            this.setState({count:this.state.count-1})
        }
        render(){
            return(
                <div>
                    <PassedComponent
                    
                    count ={this.state.count}
                    incrementCount={this.incrementCount}
                    decrementCount ={this.decrementCount}
                    {...this.props}
                    
                    />
                </div>
            )
        }
    }
  return WrappedComponent
}

export default withCounter