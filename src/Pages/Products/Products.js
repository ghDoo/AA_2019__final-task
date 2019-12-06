/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Products page                                               |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, { useState, useEffect } from "react";
    import { Card } from "../../Components/Body/Cards/Card";
    import "./_products.scss";

    const Products = () => {

      const [num1, setNum1] = useState("");
      const [num2, setNum2] = useState("");
      const [num3, setNum3] = useState("");
      const [num4, setNum4] = useState("");
      const [num5, setNum5] = useState("");
      const [num6, setNum6] = useState("");
      const [num7, setNum7] = useState("");

      useEffect(() => {

        setNum1(1);
        setNum2(2);
        setNum3(3);
        setNum4(4);
        setNum5(5);
        setNum6(6);
        setNum7(7);

 /*       const ids = [1, 2, 3, 4, 5, 6, 7];

        for (let i = 1; i <= ids.length; i++) {
          setNum(i);
          console.log(i);
          for (i of ids) {
            document.write(<Card1 num={i} /> + "<br >");
          }
        }*/
      }, []);

      // document.querySelector('.items').innerHTML += <Card1 num={num} /> + '<br />';

      return (
        <main className="items">
          <Card num={num1} />
          <Card num={num2} />
          <Card num={num3} />
          <Card num={num4} />
          <Card num={num5} />
          <Card num={num6} />
          <Card num={num7} />
        </main>
      );
    };

    export { Products };

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/
