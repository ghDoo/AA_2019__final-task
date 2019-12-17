/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                      Header component                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {Logo} from './Logo';
    import {Navigation} from './Navigation';
    import CartImage from './CartImage';

    const Header = (props) => {

        const admin = props.admin;

        return (
            <header className="header">
                <Logo />
                <Navigation admin={admin} />
                <CartImage />
            </header>
        );
    };

    export {Header};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/