/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                     Header cart component                                          |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {Link} from 'react-router-dom';
    import './_cart.scss';

    const Cart = () => {

        return (
            <section className="cart">
                <Link className="cart__img" to="/cart"></Link>
                <h1   className="cart__title"> Bag </h1>
            </section>
        );
    };

    export {Cart};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/