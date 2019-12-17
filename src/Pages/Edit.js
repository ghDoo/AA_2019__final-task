/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                     EDIT item component                                            |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {Component} from 'react';
    import { connect } from 'react-redux';
    import PropTypes from 'prop-types';
    import {GetProducts} from '../Actions/GetDataActions';
    import {EditProduct} from '../Actions/PostDataActions';
    import {UpdateProduct} from '../Actions/PostDataActions';

    class Edit extends Component {

        constructor(props) {
            super(props);
            this.state = {
                name: this.props.edit.name,
                description: this.props.edit.description,
                price: this.props.edit.price,
                images: []
            };

            console.log(this.state);

            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        };

        componentDidMount() {
           // this.props.EditProduct();
           // this.props.GetProducts();
           // console.log(this.props.id);
           this.setState(this.props.edit);
        }

        onSubmit = (event) => {
            event.preventDefault();

            const item = {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                images: []
            };

            this.props.UpdateProduct(item);
        };

        onChange = (event) => {
            this.setState({[event.target.name]: event.target.value});
            this.setState({[event.target.description]: event.target.value});
            this.setState({[event.target.price]: event.target.value});
        };

        render() {

            const { name, description, price } = this.state;

            const { edit } = this.props;

            console.log(edit);

            return (
                <div className="edit">
                    <h1 className="edit__title">enter New product</h1> 
                    <form className="edit-form" onSubmit={this.onSubmit}>
                    
                        <label className="name-label">
                            <h3 className="name-label__title">Product name</h3>
                            <input className="name-label__input" type="text" name="name" value={name} onChange={this.onChange} />
                            
                        </label>
                    
                        <label className="description-label">
                            <h3 className="description-label__title">Product description</h3>
                            <textarea className="description-label__input" type="text" name="description" value={description} onChange={this.onChange} />
                        </label>
    
                        <label className="price-label">
                            <h3 className="price-label__title">Product price / kg</h3>
                            <input className="price-label__input" type="number" name="price" value={price} onChange={this.onChange} />
                        </label>
                        <button className="edit-form__submit" type="submit"> Add </button>
                    </form>
                </div>
            );
        };
    };

    Edit.propTypes = {
        GetProducts: PropTypes.func.isRequired,
        EditProduct: PropTypes.func.isRequired,
        UpdateProduct: PropTypes.func.isRequired,
        data: PropTypes.array.isRequired,
        edit: PropTypes.object.isRequired
    };

    const mapStateToProps = state => ({
        data: state.data.items,
        edit: state.edit.item
    });

    const mapDispatchToProps = dispatch => ({
        GetProducts: () => dispatch(GetProducts()),
        EditProduct: (id) => dispatch(EditProduct(id)),
        UpdateProduct: (edit) => dispatch(UpdateProduct(edit))

    });

    export default connect(mapStateToProps, mapDispatchToProps)(Edit);

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/