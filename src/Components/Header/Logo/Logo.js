/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                     Header logo component                                          |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {Link} from 'react-router-dom';
    
    import './_logo.scss';

    const Logo = () => {

        return (
            <section className="logo">
                <Link className="logo__img" to="/"></Link>
                <h1   className="logo__title"> Mr. Potayto von Potahto shop </h1>
            </section>
        );
    };

    export {Logo};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/