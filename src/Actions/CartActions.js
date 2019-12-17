/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Cart actions                                                |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/

  
    import ApiFactory from '../ApiFactory';
    import {ADD_ITEM, REMOVE_ITEM, BUY_ITEMS, CLEAR_CART} from './ActionTypes';


    //          ADD item to cart
    export const AddToCart = (item) => dispatch => {
        dispatch({
            type: ADD_ITEM,
            payload: item
        });
    };

    //          REMOVE item to cart
    export const RemoveFromCart = (item) => dispatch => {
        dispatch({
            type: REMOVE_ITEM,
            payload: item
        });
    };

    //          BUY item
    export const BuyFromCart = (items) => dispatch => {
        ApiFactory.getInstance().post('/api/buy', { bought: items })
        .then(() => {
            dispatch({ 
                type: BUY_ITEMS,
                payload: items
            });
        });
    };

    //          CLEAR cart
    export const ClearCart = () => dispatch => {
            dispatch({ 
                type: CLEAR_CART
            });
    };

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/