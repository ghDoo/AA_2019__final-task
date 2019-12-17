/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                   Get data from API actions                                        |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import ApiFactory from '../ApiFactory';
    import {GET_ITEMS, TOP_ITEMS} from './ActionTypes';


    //          GET products from API
    export const GetProducts = () => dispatch => {
        ApiFactory.getInstance().get('/api/products')
        .then(res => res.data)
        .then((data) => {
            dispatch({
                type: GET_ITEMS,
                payload: data
            });
        })
        .catch((error) => {
            console.error ('Error: ', error.data);
        });
    };

    //          GET best products from API
    export const GetBestProducts = () => dispatch => {
        ApiFactory.getInstance().get('/api/products')
        .then(res => res.data)
        .then((data) => {
            dispatch({
                type: TOP_ITEMS,
                payload: data
            });
        })
        .catch((error) => {
            console.error ('Error: ', error.data);
        });
    };
  
/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/