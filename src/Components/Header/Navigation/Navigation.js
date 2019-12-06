/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                  Header navigation component                                       |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {Link} from 'react-router-dom';
   // import {Products} from '../../../Pages/Products/Products';
    import './_navigation.scss';

    const Navigation = () => {

        return (
            <nav className="navigation">
                <ul className="menu">
                    <li className="menu__button"><Link className="menu__link" to="/products">   Products    </Link></li>
                    <li className="menu__button"><Link className="menu__link" to="/admin">       Admin      </Link></li>
                </ul>
            </nav>
        );
    };

    export {Navigation};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/