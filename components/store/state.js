import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { reducerFunc } from "./../reducers/reducer";
import {DB} from './../../firebase';


// Inital State
const initialState = {
    firebase: DB,
    allShoes:null,
    purchase_status:false,
    shoe:null,
    user:null,
    loginState: false,
    page:{
        product: false,
        id:null,
        current:null
    },
    cart:[
        
    ]
};

// Middleware
const middleware = [thunk.withExtraArgument({DB})];

export const Store = createStore(reducerFunc, initialState, applyMiddleware(...middleware));