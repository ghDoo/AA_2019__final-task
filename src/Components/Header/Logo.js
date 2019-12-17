/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                     Header logo component                                          |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from "react";
    import {Link} from "react-router-dom";

    const Logo = () => {

        return (
            <section className="logo">
                <div className="logo__img" alt="logo"></div>
                <Link className="logo__title" to="/"> Mr. Potayto Potato </Link>
            </section>
        );
    };

    export {Logo};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/