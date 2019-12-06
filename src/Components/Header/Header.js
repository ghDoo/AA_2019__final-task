/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                       Page header block                                            |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {Logo} from './Logo/Logo';
    import {Navigation} from './Navigation/Navigation';
    import {Cart} from './Cart/Cart';

    import './_header.scss';

    const Header = () => {

        return (
            <header className="header">
                <Logo />
                <Navigation />
                <Cart />
            </header>
        );
    };

    export {Header};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/