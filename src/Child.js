
import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            text: 'Hi Cognizant',
            a:1,
            b:2
        }; 
    }
    incremetHandler(){
        this.setState({count: this.state.count +1, a:Math.random()})
       // this.setState(prevState => ( {...prevState, count : prevState.count + 1}) )
    }
    decrementHandler(){
        this.setState(prevState => ( {...prevState, count : prevState.count - 1}) )
    }
    getNumber(){
        if( this.state.count >= 10 && this.state.count < 20){
            return {text: 'Good', color: 'blue'}
        }else if( this.state.count >= 20 && this.state.count < 30){
            return {text: 'Very Good ', color: 'red'}
            
        } else{
            return {text: 'OK ! ', color: 'orange'}

        }
    }
    render() {
        return (

            <div class="jumbotron">
           <pre>
                {JSON.stringify(this.state, null, 4)}

                </pre>
                <button class="btn btn-large btn-danger" type="button" onClick={() => this.incremetHandler()}><span class="glyphicon glyphicon-plus"></span></button>
               <div class="badge">
                   {this.state.count}
                </div> 
                <button class={"btn btn-large btn-danger" + (!this.state.count ? 'disabled' : '')} type="button" disabled={!this.state.count} onClick={() => this.decrementHandler()}><span class="glyphicon glyphicon-minus"></span></button>
                <h3>Status <span class="label label-default" style={{backgroundColor : this.getNumber().color}}>{(this.getNumber() || {}).text}</span></h3>
            </div>
        )
    }
}
