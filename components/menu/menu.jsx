
import React, { Component } from 'react';


export default class Home extends Component {
    // Component State
    state = {
        shoes: null
    };

    // Before Mounting Get Data
    componentWillMount(){
       this.props.props.getShoes()
    }

    // Receive new data
    componentWillReceiveProps(props){
       this.setState((state, props)=>{
            return { shoes: props.props}
        })
    }

    render() {
        return (
             <div>Menu</div>
        );
    }
}