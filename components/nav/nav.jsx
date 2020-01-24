/* eslint-disable no-unused-expressions */
import React from 'react';
import {withRouter} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Men from "./../men/men";
import  Women from "./../women/women";
import {Home} from './../home/home';
import {Shoe} from './../shoe/shoe';
import $ from 'jquery';
import './nav.css';

class Nav_ extends React.Component{
    state = {
        
    };

    navClick = (e,k)=>{
        $('.navitem').removeClass('activetab') ;
        $(e.target).parent().addClass('activetab') ;
    }

    render() {
        
           return (
            
                   <div className='leftpanel'>
                       <div className='topbar'> 
                           <div className='logo_header' >AXEL & ARIGATO</div>
                       </div>
                       <div className='sideBanner'>
                           <div className="pagelinks">
                               <div className="navitem activetab"  >
                                   <Link to="/"  data-name='home' onClick={(e)=>this.navClick(e,'home')}>Home</Link>
                               </div>
                               <div className="navitem" >
                                   <Link to="/men"  data-name='mens' onClick={(e)=>this.navClick(e,'mens')}>Men</Link>
                               </div>
                               <div className="navitem" >
                                   <Link to="/women"  data-name='women' onClick={(e)=>this.navClick(e, 'women')}>Women</Link>
                               </div>
                           </div>
                           
                           <div className="menu">
                               <div className="menuicon">
                                   <div className="l1"></div>
                                   <div className="l2"></div>
                                   <div className="l3"></div>
                               </div>
                               <div className="menutext">Menu</div>
                           </div>
                           <div className="sociallinks">
                               <div className="socialitem" ><a className='linksocial' href="https://facebook.com" target='blank'>Facebook</a></div>
                               <div className="socialitem"><a className='linksocial' href="https://instagram.com" target='blank'>Instagram</a></div>
                               <div className="socialitem"><a className='linksocial' href="https://snapchat.com" target='blank'>Snapchat</a></div>
                               <div className="socialitem"><a className='linksocial' href="https://youtube.com" target='blank'>YouTube</a></div>
                           </div>
                       </div>
                   </div>
                   
              
           );

    }
}

export const Nav = withRouter(Nav_)















// eslint-disable-next-line no-lone-blocks
{/* <Switch>
<Route exact  path="/" render={ ()=>{
    //  console.log(this.props)
    // if( !this.props.props.page.product){
    //     return (<Home props={ this.props } isAuthed={true} />)
    // } 
    // else if( this.props.props.page.current ==='product'){
    //     return (<Home props={ this.props } isAuthed={true} />)
    // }
    // else{
    //     // return (<Shoe props={ this.props } isAuthed={true} />)
    // }
} } /> 
<Route exact path="/women" render={ ()=>{
    if( !this.props.props.page.product ){
        return ( <Women props={ this.props } isAuthed={true} />) 
    }
}} /> 
<Route exact  path="/men" render={ ()=>{
    if( !this.props.props.page.product ){
        return ( <Men props={ this.props } isAuthed={true} /> ) 
    }
}} />    

</Switch> */}