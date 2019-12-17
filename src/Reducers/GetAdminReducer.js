/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Admin Reducer                                               |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import {ADMIN_STATUS} from '../Actions/ActionTypes';

    const initState = {
        items: [],
        item: {}
    };

    export default (state = initState, action) => {
        switch(action.type){
            case ADMIN_STATUS:
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