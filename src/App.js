/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        App rootRouter                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {Component} from "react";
    import PropTypes from "prop-types";
    import {connect} from "react-redux";
    import {Router, Switch, Route} from "react-router-dom";

    import history from "./history";
    import {AdminStatus} from "./Actions/GetAdminActions";

    import {Header} from "./Components/Header/Header";
    import {Footer} from "./Components/Footer/Footer";

    import {Home} from "./Pages/Home";
    import Products from "./Pages/Products";
    import Add from "./Pages/Add";
    import Edit from "./Pages/Edit";
    import {Cart} from "./Pages/Cart";


    class App extends Component {

        componentDidMount() {
            this.props.AdminStatus();
        };

        render() {
            const {admin} = this.props;

            return (
                <Router history={history}>
                    <div className="app">
                        <Header admin={admin} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/products" component={() => <Products admin={false} />} />
                            <Route path="/admin" component={() => <Products admin={admin} />} />
                            <Route path="/add" component={Add} />
                            <Route path="/edit" component={Edit} />
                            <Route path="/cart" component={Cart} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            );
        };
    };

    App.propTypes = {
        AdminStatus: PropTypes.func.isRequired,
        admin: PropTypes.object.isRequired
    };

    const mapStateToProps = state => ({
        admin: state.admin.item
    });

    export default connect (mapStateToProps, {AdminStatus})(App);
  
/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/