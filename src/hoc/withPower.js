import React, { Component } from 'react';
function withCounter(PassedComponent,initialCount){

    class WrappedComponent extends Component{
        state={
            count :initialCount
        }
        incrementCount =()=>{
            this.setState({
                count:this.state.count+1
            })
        }
  decrementCount=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return <PassedComponent
        incrementCount={this.incrementCount}
        decrementCount={this.decrementCount}
        {...this.props}/>
    }
    }
    return WrappedComponent
    }
 