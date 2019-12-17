/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                      BUY items Reducer                                             |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import {BUY_ITEMS} from '../Actions/ActionTypes';

    const initState = {
        items: [],
        item: {}
    };

    export default (state = initState, action) => {
        switch(action.type){
            case BUY_ITEMS:
                return {
                    ...state,
                    items: []
                }
            default:
                return state
        };
    };

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/