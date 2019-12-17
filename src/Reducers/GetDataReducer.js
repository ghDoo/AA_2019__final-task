/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                      GET data Reducer                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import {GET_ITEMS, TOP_ITEMS} from '../Actions/ActionTypes';

    const initState = {
        items: [],
        item: {}
    };

    export default (state = initState, action) => {
        switch(action.type){
            case GET_ITEMS:
                return {
                    ...state,
                    items: action.payload
                }
            case TOP_ITEMS:
                return {
                    ...state,
                    items: action.payload.filter((items) => items.id <= 3)
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