/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Card component                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {useState, useEffect} from 'react';
    import {BrowserRouter as Router, Switch, Route, useRouteMatch} from "react-router-dom";
    import ApiFactory from '../../Axios-mock-adapter/ApiFactory';
    import {AdminContent} from './AdminContent';
    import {Add} from '../Add/Add';
    import './_admin.scss';

    const Admin = () => {

        const [admin, setIsAdmin] = useState('');
        const [error, setError] = useState('');

        console.log(admin);

        useEffect(() => {
            ApiFactory.getInstance().get('/api/is-admin')
            .then(({data}) => {
                setIsAdmin(data.isAdmin)})
            .catch((error) => {
                setError(error.res)});
        }, [error]);

        let { path, url } = useRouteMatch();

        return (
            <Router>
                <main className="items">
                    <Switch>

                    <Route path={`${path}/:add`}>
                            <Add />
                        </Route>

                        <Route>
                            <AdminContent url={url} />
                        </Route>



                    </Switch>
                </main>
            </Router>
        );
    };

    export {Admin};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/