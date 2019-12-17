/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                    Introduction component                                          |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from "react";
    import {Link} from "react-router-dom";

    const Introduction = () => {

        return (
            <div className="introduction">
                <h1 className="introduction__title"> DISCOVER A NEW WORLD OF POTATES </h1>
                <p  className="introduction__text"> Potato, Solanum tuberosum, is an herbaceous perennial plant in the family Solanaceae which is grown for its edible tubers. The potato plant has a branched stem and alternately arranged leaves consisting of leaflets which are both of unequal size and shape. </p>
                <Link className="introduction__button" to="/products"> Start shopping </Link>
                <p  className="introduction__footer"> Look below to see what kind of potates exist and possible to buy in our shop. </p>
            </div>
        );
    };

    export {Introduction};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/