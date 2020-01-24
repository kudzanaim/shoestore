import React, { Component } from 'react';
import {Nav} from './nav/nav';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Men from "./men/men";
import  Women from "./women/women";
import {Home} from './home/home';
import {Shoe} from './shoe/shoe';
import Cart from './cart/cart';
import { getShoes, makePurchase, getShoe, changepage, addToCart, removeFromCart, updatequantity } from './actions/action';
import {RightPanel} from './nav/rightpanel';
import './main.css';


class App extends Component{
  
  state = {
    page:{
      product:false, id:null, current:null
    }
  }

  componentDidMount(){
    document.title = "AXEL & ARIGATO | Shoe Store"
  }

  // Before Mounting Get Data
  componentWillMount(){
      this.props.getShoes()
  }

  componentDidUpdate(){
  }
  
  // Receive new data
  componentWillReceiveProps(props){
    this.setState((state)=>{
        return props
    })
  }

  render(){
   return(
        <div className='main' >
          <Router>
              <Nav props={  this.props } />   
              <RightPanel props={  this.props }  />
            
              <Switch>
                  <Route exact  path="/" render={ ()=>{
                    if(this.state.allShoes){
                      return <Home props={this.state}/>
                    }
                  }} /> 
                  <Route exact path="/women" render={ ()=><Women props={this.props}/>} /> 
                  <Route exact  path="/men" render={ ()=><Men props={this.props}/>} />    
                  <Route exact path="/shoe/:id"  component={ ()=> <Shoe props={this.props} /> } />
                  <Route exact  path="/cart" render={ ()=><Cart props={this.props}/>} />    
              </Switch>          
          </Router>
        </div>
   )
  }
}

const mapStateToProps = state => ({
  allShoes: state.shoes,
  shoe: state.shoe,
  page:state.page,
  cart:state.cart
})

const mapActionsToState = dispatch =>({
  getShoes: ()=>dispatch(   getShoes()    ),
  makePurchase: (order)=>dispatch(   makePurchase(order)    ),
  getShoe: (id)=>dispatch(   getShoe(id)    ),
  changepage: (data)=>dispatch(   changepage(data)    ),
  removeFromCart: (id)=>dispatch(   removeFromCart(id)    ),
  updatequantity: (quantdata)=>dispatch(   updatequantity(quantdata)    ),
  addToCart: (data)=>dispatch(   addToCart(data)    )
})

export default connect( mapStateToProps, mapActionsToState )(App);