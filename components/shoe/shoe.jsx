
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import './shoe.css';
// import './home.css';
import _ from 'lodash';

class Shoes extends React.Component{
    state = {};

    // Size Clicked
    sizeClick= (e)=>{
        $(`.sizeitem`).removeClass('sizeclick');
        $(`div[data-name="${e}"]`).addClass('sizeclick');
    }

    // Add to Cart
    addToCart = ()=>{
        try{
            if($(`.sizeclick`)[0].innerHTML){
                // Get Size
                const size = $(`.sizeclick`)[0].innerHTML;
                // Get Quantity
                const quantity = $(`.selectquantitytag`)[0].value;
                // Get ID
                const id =  this.props.match.params.id;
                const product = {   ...this.props.props.allShoes[ id ], quantity, size    };
                delete product.sizes;
                // Add to Cart
                this.props.props.addToCart(product)
            }
        }catch(e){
            alert('Please select a size & quantity first!')
        }
    }

    render(){
            return (
                ( !this.props.props.allShoes )? <div>Error Rendering</div> :(
                    <div className='page' data-name='shoe'>
                        <div className='pageheaderprev'>{this.props.props.allShoes[ this.props.match.params.id ].name}</div>
                        <div className="body">
                            <div className='shoeimageprev'>
                                <div className='shoeimagecontainer'><img className='shoeimageitem' src={this.props.props.allShoes[ this.props.match.params.id ].image} alt=''/></div>
                            </div>
                            <div className='shoeimagedetails'>
                                <div className='shippingdetails'></div>
                                <div className='availability'> <div className="availabityicon">{ (this.props.props.allShoes[ this.props.match.params.id ].quantity>0)? 'In-Stock':'Out Of Stock'}</div> </div>
                                <div className="gender">{ this.props.props.allShoes[ this.props.match.params.id ].sex } {this.props.props.allShoes[ this.props.match.params.id ].type}</div>
                                <div className="price">{this.props.props.allShoes[ this.props.match.params.id ].price}</div>
                                <div className="sizeandquantity">
                                </div>
                                <div className="shoe_description">
                                    <div className="shoedescriptionhdr">Description</div>
                                    <div className="shoedescriptiontext">{this.props.props.allShoes[ this.props.match.params.id ].description}</div>
                                </div>

                                <div className="sizecont">
                                    <div className="addtocartcontainer">
                                        <div className="sizelabel">Choose Size: </div>
                                        <div className="size"> 
                                            {this.props.props.allShoes[ this.props.match.params.id ].sizes.map((size,id)=>{
                                            return(
                                                <div key={id} className="sizeitem"  data-name={size} onClick={()=>{this.sizeClick(size)}}>{size}</div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='selectquantity'>
                                        <div className="quantitylabel">Quantity: </div>
                                        <select className="selectquantitytag">
                                            <option value="1" className="quantityitem">1</option>
                                            <option value="2" className="quantityitem">2</option>
                                            <option value="3" className="quantityitem">3</option>
                                            <option value="4" className="quantityitem">4</option>
                                            <option value="5" className="quantityitem">5</option>
                                        </select>
                                    </div>
                                    <div className="addtocartbtn" onClick={ ()=>this.addToCart() }>ADD TO CART</div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            )
    };
}

export const Shoe = withRouter( Shoes )