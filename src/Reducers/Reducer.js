/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                      Redux rootReducer                                             |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import {combineReducers}    from "redux";

    import GetAdminReducer      from "./GetAdminReducer";
    import GetDataReducer       from "./GetDataReducer";
    import CartReducer          from "./CartReducer";
    import PurchaseReducer      from "./PurchaseReducer";
    import PostDataReducer      from "./PostDataReducer";
    
    export default combineReducers({
        admin:  GetAdminReducer,
        data:   GetDataReducer,
        cart:   CartReducer,
        buy:    PurchaseReducer,
        edit:    PostDataReducer
    });
  
/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/