import React, { Component } from 'react';
import search from './../../assets/magnifying-glass.png';
import carticon from './../../assets/shopping-cart.png';
import avatar from './../../assets/user.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class RightPanel extends Component{
    render(){
        return(
                <div className='rightpanel'>
                    <div>
                        <Link to='/cart' className="addtocart" >
                            <div className='carttext'>Cart</div>
                            <div className='carticoncont'>  <img className='carticon' src={carticon} alt=''/>  </div>
                            <div className='cartcount'> {this.props.props.cart.length} </div>
                        </Link>
                    </div>
                    
                    <Link to='/search'><div  className='search'> <div></div> <div className='iconcont'><img className='searchicon' src={search} alt=''/> </div></div></Link>

                    <Link to='/login'><div  className='login'> <div></div> <div className='iconcont'><img className='loginicon' src={avatar} alt=''/> </div></div></Link>
                    
                </div>
        )
    }
}