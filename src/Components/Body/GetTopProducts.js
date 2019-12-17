/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                  Get Top Products component                                        |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {Component} from 'react';    
    import PropTypes from 'prop-types';
    import {connect} from 'react-redux';
    import {GetBestProducts} from '../../Actions/GetDataActions';
    import {Carousel} from './Carousel';

    class GetTopProducts extends Component {

        componentDidMount() {
            this.props.GetBestProducts();
        };

        render() {

            const {data} = this.props;

            return (
                <div className="list">
                    <p className="list__title"> Our Top 3 choices for 2019 !</p>
                    <ul className="list-items">
                        {data.map(data => (
                            <li className="list-items-card" key={data.id}>
                                <Carousel data={data} />
                                <p className="list-items-card__title"> {data.name} </p>
                                <p   className="list-items-card__description"> {data.description} </p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        };
    };

    GetTopProducts.propTypes = {
        GetBestProducts: PropTypes.func.isRequired,
        data: PropTypes.array.isRequired
    };
    
    const mapStateToProps = state => ({
        data: state.data.items
    });

    const mapDispatchToProps = dispatch => ({
        GetBestProducts: () => dispatch(GetBestProducts())
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(GetTopProducts);

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/