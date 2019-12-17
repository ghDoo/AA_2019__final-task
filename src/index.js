/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        App index page                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from "react";
    import ReactDOM from "react-dom";
    import {Provider} from "react-redux";
    import {store} from "./Store";
    import App from "./App";

    import "./scss/index.scss";

    ReactDOM.render(<Provider store={store}>
                                            <App />
                                                    </Provider>, document.getElementById("root"));
    
/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/