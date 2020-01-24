import {DB} from './../../firebase';
import _ from 'lodash';


// Action Types
export const GET_SHOE = "GET_SHOE";
export const GET_ALL_SHOES = "GET_ALL_SHOES";
export const SIGN_IN = "SIGN_IN";
export const PURCHASE = "PURCHASE";
export const PAGE_CHANGE = "PAGE_CHANGE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";


// Get Posts Functions
export function getShoes() {
    return function(dispatch){
        DB.database().ref('shoes').once('value').then((snap)=>{
            return dispatch({
                type: GET_ALL_SHOES,
                payload: snap.val(),
            })
        })
    }
};

// Make Purchase
export function makePurchase(order) {
    return async function(dispatch){
        // Quantity
        let qnt = await DB.database().ref(`shoes/${order.id}/quantity`).once('value').then( snap=>snap.val() );
        // Create new Purchase
        await DB.database().ref('purchases').push({   id: order.id, quantity: order.quantity, value: order.value * order.quantity  })
        // Update quantity on product
        await DB.database().ref(`shoes/${order.id}`).update({ quantity: qnt - order.quantity });
        // Dispatch Purchase Done
        return dispatch({
            type: PURCHASE,
            payload: { purchasestatus: true, id: order.id, value: order.value * order.quantity },
        })
    }
}

// Get Shoe
export function getShoe(id) {
    return function(dispatch){
        DB.database().ref(`shoes/${id}`).once('value').then( (snap)=>{
            return dispatch({
                type: GET_SHOE,
                payload: snap.val(),
            })
        })
    }
}

// Change Page
export function changepage(data){
 
    return {
        type: PAGE_CHANGE,
        payload: data
    }
}

// Add to Cart
export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

// Remove from Cart
export function removeFromCart(data){
    return async function(dispatch){
        const cart = data.cart;
        const without = cart.filter( item => item.id !== data.id)

        return dispatch({
            type: REMOVE_FROM_CART,
            payload: without
        })
    }
}

// Update quantity
export function updatequantity(quantdata={id:'', cart:[], type:null}){
    return function(dispatch){
        // cart & key
        const cart = quantdata.cart;
        const key = _.findKey(cart, {id:quantdata.id});
        const quant = parseInt(cart[key].quantity);
        
        // operate on data
        ( quantdata.type === 'increment' )? cart[key].quantity = JSON.stringify(quant + 1) : cart[key].quantity = JSON.stringify(quant - 1);

        return dispatch({
            type: UPDATE_QUANTITY,
            payload: cart
        })
    }
}