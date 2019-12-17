/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                    Products & admin page                                           |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {Component} from "react";
    import PropTypes from 'prop-types';
    import {connect} from 'react-redux';
    import {GetProducts} from '../Actions/GetDataActions';
    import {AddToCart} from '../Actions/CartActions';
    import {AddProduct} from '../Actions/PostDataActions';
    import {EditProduct}        from "../Actions/PostDataActions";
    import {DeleteProduct} from "../Actions/PostDataActions";
    import {Card} from "../Components/Body/Card";

    class Products extends Component {

        componentDidMount() {
            this.props.GetProducts();
        };

        render() {

            const {data} = this.props;

            return (
                <div className="items">
                    <Card
                        admin={this.props.admin}
                        data={data}
                        AddToCart={this.props.AddToCart}
                        AddProduct={this.props.AddProduct}
                        EditProduct={this.props.EditProduct}
                        DeleteProduct={this.props.DeleteProduct}
                    />
                </div>
            );
        };
    };

    Products.propTypes = {
        GetProducts: PropTypes.func.isRequired,
        AddToCart: PropTypes.func.isRequired,
        AddProduct: PropTypes.func.isRequired,
        EditProduct: PropTypes.func.isRequired,
        DeleteProduct: PropTypes.func.isRequired,
        data: PropTypes.array.isRequired,
        cart: PropTypes.array.isRequired,
        edit: PropTypes.array.isRequired
    };
    
    const mapStateToProps = state => ({
        data: state.data.items,
        cart: state.cart,
        edit: state.edit.items
    });

    const mapDispatchToProps = dispatch => ({
        GetProducts: () => dispatch(GetProducts()),
        AddToCart: (item) => dispatch(AddToCart(item)),
        AddProduct: (item) => dispatch(AddProduct(item)),
        EditProduct: (data) => dispatch(EditProduct(data)),
        DeleteProduct: (item) => dispatch(DeleteProduct(item))
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(Products);

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/