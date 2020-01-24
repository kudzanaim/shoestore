import { GET_SHOE, GET_ALL_SHOES, PURCHASE, PAGE_CHANGE, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY} from "../actions/action";

export function reducerFunc(state, action) {
  // console.log(state)
  switch (action.type) {
    case GET_SHOE:
      return {...state, shoe: action.payload}

    case PURCHASE:
      return {...state}

    case GET_ALL_SHOES:
      return {...state, shoes: action.payload}
    
    case PAGE_CHANGE:
      return {...state, page:action.payload}
    
    case ADD_TO_CART:
      return {...state, cart:[...state.cart, action.payload]}
    
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload }
    
    case UPDATE_QUANTITY:
      return { ...state, cart: action.payload }

    default:
      return state;
  }
}