
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Shoe} from './../shoe/shoe';
import './home.css';
import _ from 'lodash';

class Home_ extends Component {
    // Component State
    state = {
        shoes: null,
        allShoes:null,
        page:{
           current:null
        }
    };


    render() {
            return (
                ( !this.props.props.allShoes && this.props.props.page.product)? null : (
                    // <Router>
                        <div className='page' data-name='home'>
                            <div className="pageheader">Home</div>
                            <div className="home">
                                {
                                    ( this.props.props.allShoes != null )?
                                        Object.values(this.props.props.allShoes).map( (shoe)=>{return (
                                        ( shoe.id )?(
                                            <Link to={`/shoe/${shoe.id}` } key={shoe.id}>
                                                <div className='shoeItem' key={shoe.id} data-id={shoe.id}>
                                                    <div className="productkey">3294879</div>
                                                    <div className="imageholder">  <img className='shoeimage' src={shoe.image} alt={shoe.name}/></div>
                                                    <div className="descriptionholder">
                                                        <div className="shoename">{shoe.name}</div>
                                                        <div className="shoeprice">$ {shoe.price}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ):null
                                    )}) : <div>Loading Products...</div>
                                }
                            </div>
                        </div>    
                        
                    // </Router>
                )
            );
    }
}
export const Home = withRouter(Home_);

