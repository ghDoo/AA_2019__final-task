/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                      New Card component                                            |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {Link} from "react-router-dom";

    const NewProductCard = () => {

        return (
                <li className="card">
                    <div className="card__img"></div>
                    <p  className="card__title"> Add new product </p>
                    <Link className="card__button" to="/add"> add </Link>
                </li>
        );
    };

    export {NewProductCard};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/