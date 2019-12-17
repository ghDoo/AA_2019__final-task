/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                  Header navigation component                                       |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {Link} from 'react-router-dom';

    const Navigation = (props) => {

        const admin = props.admin;

        if(admin.admin !== true){
            return (
                <nav className="navigation">
                    <ul className="menu">
                        <li className="menu__button"><Link className="menu__button_link" to="/products">   Products    </Link></li>
                    </ul>
                </nav>
            );
        } else {
            return (
                <nav className="navigation">
                    <ul className="menu">
                        <li className="menu__button"><Link className="menu__button_link" to="/products">   Products    </Link></li>
                        <li className="menu__button"><Link className="menu__button_link" to="/admin">       Admin      </Link></li>
                    </ul>
                </nav>
            );
        };
    };

    export {Navigation};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/