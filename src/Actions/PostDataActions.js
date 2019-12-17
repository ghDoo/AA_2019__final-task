/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                   Post data to API actions                                         |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import ApiFactory from '../ApiFactory';
    import {NEW_ITEM, EDIT_ITEM, UPDATE_ITEM, DELETE_ITEM} from './ActionTypes';


    //          ADD new product to API
    export const AddProduct = (item) => dispatch => {
        ApiFactory.getInstance().post('/api/products', item)
        .then(res => res.data)
        .then((item) => dispatch({
            type: NEW_ITEM,
            payload: item
        }))
        .catch((error) => {
            console.error ('Error: ', error.item);
        });
    };

    //          EDIT products from API
    export const EditProduct = (id) => dispatch => {
        ApiFactory.getInstance().get(`/api/products/${id}`)
        .then(res => res.data)
        .then((data) => {
            dispatch({
                type: EDIT_ITEM,
                payload: data
            });
        })
        .catch((error) => {
            console.error ('Error: ', error.res);
        });
    };

    //          UPDATE after edit product to API
    export const UpdateProduct = (id, item) => dispatch => {
        ApiFactory.getInstance().put(`/api/products/${id}`, item)
        .then(res => res.data)
        .then((data) => {
            dispatch({
                type: UPDATE_ITEM,
                payload: data
            });
        })
        .catch((error) => {
            console.error ('Error: ', error.res);
        });
    };

    //          DELETE product from API
    export const DeleteProduct = (id) => dispatch => {
        ApiFactory.getInstance().delete(`/api/products/${id}`)
        .then(res => res.data)
        .then((data) => {
            dispatch({
                type: DELETE_ITEM,
                payload: data
            });
        })
        .catch((error) => {
            console.error ('Error: ', error.res);
        });
    };

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/