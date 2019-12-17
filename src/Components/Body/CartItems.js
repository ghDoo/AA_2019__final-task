/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                     Cart items component                                           |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {useState} from 'react';
    import PropTypes from 'prop-types';
    import {connect} from 'react-redux';
    import history from "../../history";
    import {AddToCart} from '../../Actions/CartActions';
    import {RemoveFromCart} from '../../Actions/CartActions';
    import {BuyFromCart} from '../../Actions/CartActions';
    import {ClearCart} from '../../Actions/CartActions';

    const CartItems = (props) => {

        const [confirmMessage, setConfirmMessage] = useState(false);

        const sorting = (items) => {
            return items.sort((a, b) => a.id - b.id);
        };

        const quantity = props.cart.reduce((acc, item) => acc + item.quantity , 0);

        console.log(quantity);

        if(confirmMessage === true){
            return (
                <div className="confirm">
                    <p className="confirm__title"> Thank you for purchase ! </p>
                    <button  className="confirm__button" onClick={() => {history.push('/'); props.ClearCart(props.cart);}}> OK </button>
                </div>
            );
        } else {
            return (
                <div className="table">
                    <div className="table-header">
                        <p className="table-header__title"> Product name </p>
                        <p className="table-header__price"> Price </p>
                        <p className="table-header__quantity"> Quantity </p>
                        <p className="table-header__controls"> Controls </p>
                        <p className="table-header__sum"> total price per item </p>
                    </div>
                    <div>
                    {sorting(props.cart).map(item => (
                        <div className="table-body" key={item.id}>
                            <p className="table-body__title"> {item.name} </p>
                            <p className="table-body__price"> {item.price} $ / kg </p>
                            <p className="table-body__quantity"> {item.quantity} kg </p>
                            <div className="table-body__controls">
                                <button className="table-body__controls--reduce" onClick={() => props.RemoveFromCart(item)}> reduce <span className="table-body__controls--sign"> - </span></button>
                                <p className="table-body__controls--name"> quantity </p>
                                <button className="table-body__controls--increase" onClick={() => props.AddToCart(item)}><span className="table-body__controls--sign"> + </span> increase </button>
                            </div>
                            <p className="table-body__sum"> {item.price * item.quantity} $ </p>
                        </div>
                    ))}
                    </div>
                    <div className="table-total">
                        <p className="table-total__title"> total </p>
                        <p className="table-total__price"> </p>
                        <p className="table-total__quantity"> {props.cart.reduce((acc, item) => acc + item.quantity , 0)} kg </p>
                        <p className="table-total__controls"> </p>
                        <p className="table-total__sum"> {props.cart.reduce((acc, item) => acc + (item.quantity * item.price) , 0)} $ </p>
                    </div>
                    <div className="table-footer">
                        <button className="table-footer__button" type="submit" onClick={() => {props.BuyFromCart(props.cart); setConfirmMessage(true);}}> SUBMIT ORDER </button>
                    </div>
                </div>
            );
        };
    };

    CartItems.propTypes = {
        AddToCart: PropTypes.func.isRequired,
        RemoveFromCart: PropTypes.func.isRequired,
        BuyFromCart: PropTypes.func.isRequired,
        ClearCart: PropTypes.func.isRequired,
        cart: PropTypes.array.isRequired,
        buy: PropTypes.object.isRequired
    };

    const mapStateToProps = state => ({
        cart: state.cart,
        buy: state.buy.item
    });

    const mapDispatchToProps = dispatch => ({
        AddToCart: (item) => dispatch(AddToCart(item)),
        RemoveFromCart: (item) => dispatch(RemoveFromCart(item)),
        BuyFromCart: (cart) => dispatch(BuyFromCart(cart)),
        ClearCart: (cart) => dispatch(ClearCart(cart))
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(CartItems);

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/