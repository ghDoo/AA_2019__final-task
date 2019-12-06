/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                       Home page content                                            |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
\*|                                donatas.dereskevicius@gmail.com                                     |*/


    import React from 'react';
    import {GetTopProducts} from '../../Components/Body/TopProducts/GetTopProducts';
    import {Introduction} from '../../Components/Body/Introduction/Introduction';
    import './_home.scss';

    const Home = () => {

        return (
          <div className="content">
            <Introduction />
            <GetTopProducts />
          </div>
        );
    };

    export {Home};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/