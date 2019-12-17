/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                     EDIT item component                                            |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, { Component } from 'react';
    import { connect } from 'react-redux';
    import PropTypes from 'prop-types';
    import history from "../history";
    import { GetProducts } from '../Actions/GetDataActions';
    import { EditProduct, UpdateProduct } from '../Actions/PostDataActions';

    class Edit extends Component {

        constructor(props) {
            super(props);
            this.state = {
                id: this.props.edit.id,
                name: '',
                description: '',
                price: '',
                images: [{
                    name: this.props.edit.name,
                    url: this.props.edit.url
                }, {
                    name: this.props.edit.name,
                    url: this.props.edit.url
                }, {
                    name: this.props.edit.name,
                    url: this.props.edit.url
                }]
            };

            console.log(this.state);

            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        };

        onSubmit = (event) => {
            event.preventDefault();

            const item = {
                id: this.props.edit.id,
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                images: [{
                    name: this.props.edit.name,
                    url: this.props.edit.images[0].url
                }, {
                    name: this.props.edit.name,
                    url: this.props.edit.images[1].url
                }, {
                    name: this.props.edit.name,
                    url: this.props.edit.images[2].url
                }]
            };

            this.props.UpdateProduct(this.props.edit.id, item);
            history.push('/');
        };

        onChange = (event) => {
            this.setState({[event.target.name]: event.target.value});
            this.setState({[event.target.description]: event.target.value});
            this.setState({[event.target.price]: event.target.value});
        };

        render() {

            return (
                <div className="edit">
                    <p className="edit__title"> edit {this.props.edit.name} </p> 
                    <form className="edit-form" onSubmit={this.onSubmit}>
                    
                        <label className="edit-form__label">
                            <h3 className="edit-form__label_title">Product name</h3>
                            <input className="edit-form__label_input" type="text" name="name" value={this.state.name} onChange={this.onChange} />
                            
                        </label>
                    
                        <label className="edit-form__label">
                            <h3 className="edit-form__label_title">Product description</h3>
                            <textarea className="edit-form__label_input" type="text" name="description" value={this.state.description} onChange={this.onChange} />
                        </label>
    
                        <label className="edit-form__label">
                            <h3 className="edit-form__label_title">Product price / kg</h3>
                            <input className="edit-form__label_input" type="number" name="price" value={this.state.price} onChange={this.onChange} />
                        </label>
                        <button className="edit-form__button" type="submit"> Add </button>
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
        UpdateProduct: (id, item) => dispatch(UpdateProduct(id, item))

    });

    export default connect(mapStateToProps, mapDispatchToProps)(Edit);

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/