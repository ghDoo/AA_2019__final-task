/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                         Redux store                                                |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import {createStore, applyMiddleware, compose} from "redux";
    import thunk from "redux-thunk";
    
    import Reducer from "./Reducers/Reducer";
    
    const initState = {};
    
    const middleware = [thunk];
    
    const store = createStore (
        Reducer, 
        initState,
        compose (
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    
    export {store};
  
/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/