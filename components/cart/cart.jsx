import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import './cart.css';
import Cleave from 'cleave.js/react';
import visa from './../../assets/visa (1).png';
import mastercard from './../../assets/mastercard.png';
import amex from './../../assets/american-express (1).png';
import remove from './../../assets/remove.png';

export default class Cart extends React.Component{
    state = {
        
    };

    cardclick = (type)=>{
        $('.carditem').removeClass('cardselect');
        $(`div[data-name="${type}"]`).addClass('cardselect')
    };

    quantityChange = (id)=>{
        const quantity = $(`.cartitemcount[data-id="${id}"`)[0].innerText;
        const price  = this.props.props.allShoes[ id ].price;
        const newPrice = parseInt( quantity ) * parseInt( price );

        $(`.priceitemcart[data-id="${id}"`).text(  parseFloat( newPrice).toFixed(2) );
    }

    decrementquantity = (id)=>{
        this.updatetotal();
        return this.updatequantityincart({id:id, type:'decrement'});
    }
    
    incrementquantity = (id)=>{
        this.updatetotal()
        return this.updatequantityincart({id:id, type:'increment'});
    }

    removefromcart = (id)=>{
        return this.props.props.removeFromCart({cart:this.props.props.cart, id:id})
    } 

    updatetotal = (item)=>{
       
        const totals = (this.props.props.cart.length > 0)? this.props.props.cart.map( item => parseFloat(item.price) * parseInt(item.quantity) ):[];
        const total =  (totals.length > 0)? totals.reduce((acc,red)=>(acc+red)):'0.00';
        
        return parseFloat(total).toFixed(2)
    }

    updatequantityincart = (d={type:'', id:''})=>{
        
        return this.props.props.updatequantity({...d, cart:this.props.props.cart}), this.forceUpdate(()=>{
            const key = _.findKey(this.props.props.cart, {id:d.id});
            $(`.priceitemcart[data-id=${d.id}]`).text(  parseFloat( this.props.props.cart[key].quantity * this.props.props.cart[key].price).toFixed(2) )
        })
    }

    checkout = ()=>{
        if(this.props.props.cart.length>0){
            var type = ( $('.carditem').hasClass('cardselect'))? true : (()=>{ alert('Please Select Card Type'); return false})();
            var name = ( $('.carditem').hasClass('cardselect'))? true : (()=>{ alert('Card Name not entered'); return false})();
            var number = ( $('.carditem').hasClass('cardselect'))? true : (()=>{ alert('Enter 16 digit Card Number'); return false})();
            var cvc = ( $('.carditem').hasClass('cardselect'))? true : (()=>{ alert('CVC not entered'); return false})();
            var expiry = ( $('.carditem').hasClass('cardselect'))? true : (()=>{ alert('Please Enter Expiry Date'); return false})();
    
            // eslint-disable-next-line no-unused-expressions
            ( type && name && number && cvc && expiry)? alert('Payment Successful!') : null;
        }else{
            alert('No items in cart!')
        }
    }

    render(){
        return (
            <div className='page'>
                <div className='cartheader'>Shopping Cart</div>
                <div className="cartcontainer">
                    <div className="cartproductcontainer">
                        <div className="cartproducts">
                            {
                                ( this.props.props.cart.length > 0)? this.props.props.cart.map((item, index)=>{
                                    return (
                                        <div className='cartproduct' key={index}>
                                            <div className="imagecartholder">
                                                <img src={item.image} alt={item.image} className="imagecart"/>
                                            </div>
                                            <div className="metacart">
                                                <div className="cartproductname">{item.name}</div>
                                                <div className="cartproductid">{item.id}</div>
                                            </div>
                                            <div className="cartquantity">
                                               <div className="cartcountercont">
                                                   <div className="decrementquant" data-id={item.id} onClick={()=>this.decrementquantity(item.id)}>-</div>
                                                   <div className="cartitemcount" data-id={item.id}>{item.quantity}</div>
                                                   <div className="decrementquant" data-id={item.id} onClick={()=>this.incrementquantity(item.id)}>+</div>
                                               </div>
                                            </div>
                                            <div className="pricecartdetails"> $ <span className='priceitemcart' data-id={item.id} >{item.price*parseInt(item.quantity)}</span> </div>
                                            <div className="removeproduct">
                                                <div className="removecartitem" data-id={item.id} onClick={()=>this.removefromcart(item.id)}> <img src={remove} alt="" className="removecart"/> </div>
                                            </div>
                                        </div>
                                    )
                                }):null
                            }
                        </div>
                        <div class="cartsubtotalcont">
                            <div className="cartsubtotal">
                                <div className="cartsubttltext">Subtotal</div>
                                <div className="cartsubttlaomunt">${this.updatetotal()}</div>
                            </div>
                        </div>

                    </div>
                    <div className="cartdetails">
                        <div className="cartdetailshdr">Card Details</div>
                        <div className="carddetailselemts">
                            <div className="cardtypecont">
                                <label className='carddetailslabels' htmlFor="">Select Card Type</label>
                                <div className="cardtypes">
                                    <div onClick={()=>this.cardclick('visa')} className="carditem" data-name='visa' ><img src={visa} alt="cardtype" className="cardtype"/></div>
                                    <div onClick={()=>this.cardclick('mastercard')} className="carditem" data-name='mastercard'><img src={mastercard} alt="cardtype" className="cardtype"/></div>
                                    <div onClick={()=>this.cardclick('amex')} className="carditem" data-name='amex'><img src={amex} alt="cardtype" className="cardtype"/></div>
                                </div>
                            </div>
                            <div className='carddetailsfield'>
                                <label className='carddetailslabels' htmlFor="cardname">Name on card</label>
                                <Cleave className='carddetailsiputs name' type="text" placeholder=''/>
                            </div>
                            <div className='carddetailsfield'>
                                <label className='carddetailslabels' htmlFor="cardname">Card Number</label>
                                <Cleave options={{creditCard: true}} className='carddetailsiputs cardnumber' type="text" placeholder=''/>
                            </div>
                            <div className='cardfieldcolumnd'>
                                <div className='carddetailsfield'>
                                    <label className='carddetailslabels' htmlFor="cardname">CVC</label>
                                    <Cleave maxLength='3' className='carddetailsiputs cvc' type="text" placeholder=''/>
                                </div>
                                <div className='carddetailsfield' style={{position: 'relative', left: '20px', width: '80px'}}>
                                    <label className='carddetailslabels expiry' htmlFor="cardname">Expiry Date</label>
                                    <Cleave options={{creditCard: true}} className='carddetailsiputs' type="text" placeholder='Month/Year'/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="carddetailsbtn" onClick={()=>this.checkout()}>Check Out</div>
                    </div>
                </div>
            </div>
        )
    };
}
