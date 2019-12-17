/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                       Home page content                                            |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from "react";
    import {Introduction} from "../Components/Body/Introduction";
    import GetTopProducts from "../Components/Body/GetTopProducts";

    const Home = () => {

        return (
          <main className="content">
            <Introduction />
            <GetTopProducts />
          </main>
        );
    };

    export {Home};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/