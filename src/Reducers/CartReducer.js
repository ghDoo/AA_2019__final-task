/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Cart Reducer                                                |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import {ADD_ITEM, REMOVE_ITEM, CLEAR_CART} from '../Actions/ActionTypes';

    const cartWithoutItems = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id);

    const cartWithItems = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];

    const addingToCart = (cart, item) => {
        const cartItem = cartWithItems(cart, item);
        return cartItem === undefined
            ? [...cartWithoutItems(cart, item), {...item, quantity: 1}]
            : [...cartWithoutItems(cart, item), {...cartItem, quantity: cartItem.quantity +1}]
    };

    const removingFromCart = (cart, item) => {
        return item.quantity === 1
        ? [...cartWithoutItems(cart, item)]
        : [...cartWithoutItems(cart, item), {...item, quantity: item.quantity -1}]
    }

    export default (state = [], action) => {
        switch(action.type){
            case ADD_ITEM:
                return addingToCart(state, action.payload);
            case REMOVE_ITEM:
                return removingFromCart(state, action.payload);
            case CLEAR_CART:
                return []
            default:
                return state;
        };
    };

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/