/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Card component                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import { Link} from "react-router-dom";
 //   import {Add} from '../../../Pages/Add/Add';
    // import './_card.scss';

    const AddCard = (props) => {

        let url = props.url;

        return (
                <section className="card">
                    <h1  className="card__title"> add new product </h1>
                    <Link className="menu__link" to={`${url}/add`}>   add    </Link>
                </section>
        );
    };

    export {AddCard};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/