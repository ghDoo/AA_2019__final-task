/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                     Header cart component                                          |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from "react";
    import PropTypes from 'prop-types';
    import {connect} from 'react-redux';
    import {Link} from "react-router-dom";
    import {AddToCart} from '../../Actions/CartActions';

    const CartImage = (props) => {

        const cart = props.cart.reduce((acc, item) => acc + item.quantity , 0);

        return (
            <section className="cart">
                <Link className="cart__img" to="/cart"></Link>
                <Link className="cart__title" to="/cart"> Bag </Link>
                <div className="cart__count"> {cart} kg </div>
            </section>
        );
    };

    CartImage.propTypes = {
        AddToCart: PropTypes.func.isRequired,
        cart: PropTypes.array.isRequired
    };

    const mapStateToProps = state => ({
        cart: state.cart
    });

    const mapDispatchToProps = dispatch => ({
        AddToCart: (item) => dispatch(AddToCart(item))
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(CartImage);

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/