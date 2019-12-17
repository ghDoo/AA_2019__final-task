/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                      POST data Reducer                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import {NEW_ITEM, EDIT_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../Actions/ActionTypes';

    const initState = {
        items: [],
        item: {}
    };

    export default (state = initState, action) => {
        switch(action.type){
            case NEW_ITEM:
                return {
                    ...state,
                    item: action.payload,
                }
            case EDIT_ITEM:
                return {
                    ...state,
                    item: action.payload
                }
            case UPDATE_ITEM:
                return {
                    ...state,
                    item: action.payload
                }
            case DELETE_ITEM:
                return {
                    ...state,
                    item: action.payload
                }
            default:
                return state;
        };
    };

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/