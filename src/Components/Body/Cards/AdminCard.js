/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Card component                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


  import React, {useState, useEffect} from 'react';
  import ApiFactory from '../../../Axios-mock-adapter/ApiFactory';
  import {Carousel} from '../Carousels/Carousel';
  import {filter, map} from 'lodash';
  import './_card.scss';

  const AdminCard = (props) => {

      const [value, setValue] = useState('');
      const [error, setError] = useState('');

      useEffect(() => {
          ApiFactory.getInstance().get('/api/products')
              .then((res) => {
                  setValue(res.data);
              })
              .catch((error) => {
                  setError(error.res)
              });
      }, [error]);

      let num = props.num;
      let obj_Name;
      let obj_Desc;
      let obj_Price;

      const getObj = (num) => {
          let obj         = filter(value, obj => obj.id === num);
              obj_Name    = map(obj, 'name');
              obj_Desc    = map(obj, 'description');
              obj_Price   = map(obj, 'price');
      };

      getObj(num);

      return (
          <section className="card">
              <Carousel num={num} />
              <h1  className="card__title"> {obj_Name} </h1>
              <h2  className="card__price"> {obj_Price} / kg </h2>
              <p   className="card__description"> {obj_Desc} </p>
              <button className="card__button"> Delete </button>
              <button className="card__button"> Edit </button>
          </section>
      );
  };

  export {AdminCard};

/*|____________________________________________________________________________________________________|
|                                                                                                    |
|                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
|                                                                                                    |*/