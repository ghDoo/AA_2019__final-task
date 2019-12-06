/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        App index page                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import ReactDOM from 'react-dom';
    import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

    import {Header} from './Components/Header/Header';
    import {Footer} from './Components/Footer/Footer';

    import {Home} from './Pages/Home/Home';
    import {Products} from './Pages/Products/Products';
    import {Admin} from './Pages/Admin/Admin';
    import {CartList} from './Pages/CartList';

    import './scss/index.scss';


    const App = () => {

        return (
            <Router>
                <div className="app">
                    <Header />
                    <Switch>
                        <Route exact path="/products">
                            <Products />
                        </Route>
                        <Route exact path="/admin">
                            <Admin />
                        </Route>
                        <Route exact path="/cart">
                            <CartList />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    };

    ReactDOM.render(<App />, document.getElementById("root"));

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/