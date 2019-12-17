/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                  Admin identification actions                                      |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import ApiFactory from '../ApiFactory';
    import {ADMIN_STATUS} from './ActionTypes';

    //          GET Admin status from ApiFactory
    export const AdminStatus = () => dispatch => {
        ApiFactory.getInstance().get('/api/admin')
        .then(res => res.data)
        .then((data) => {
            dispatch({
                type: ADMIN_STATUS,
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