/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Cart component                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
    import CartItems from '../Components/Body/CartItems';

    const Cart = () => {

        return (
            <Router>
                <div className="items">
                    <Switch> 
                        <Route>
                            <CartItems />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    };
    
   export {Cart};
  
/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/