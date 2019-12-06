/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                      Carousel component                                            |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {useState, useEffect} from 'react';
    import ApiFactory from '../../../Axios-mock-adapter/ApiFactory';
    import {filter, map, nth} from 'lodash';
    import './_carousel.scss';

    const Carousel = (props) => {

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
        let image_1_URL;
        let image_2_URL;
        let image_3_URL;


        const getObj = (num) => {
            let obj             = filter(value, obj => obj.id === num);
                obj_Name        = map(obj, 'name');
            let images_Array    = map(obj, 'images');
            let images_Obj      = nth(images_Array, 0);
            // eslint-disable-next-line eqeqeq
            let obj_Image_1     = filter(images_Obj, obj => obj.id == num + '01');
                image_1_URL     = map(obj_Image_1, 'url');
            // eslint-disable-next-line eqeqeq
            let obj_Image_2     = filter(images_Obj, obj => obj.id == num + '02');
                image_2_URL     = map(obj_Image_2, 'url');
            // eslint-disable-next-line eqeqeq
            let obj_Image_3     = filter(images_Obj, obj => obj.id == num + '03');
                image_3_URL     = map(obj_Image_3, 'url');
        };

        getObj(num);

        return (
             <ul className='carousel'>
                <input className='carousel__active' type="radio" id={num + 'A'} name={'active' + num} checked={true} readOnly />
                <input className='carousel__active' type="radio" id={num + 'B'} name={'active' + num} checked={true} readOnly />
                <input className='carousel__active' type="radio" id={num + 'C'} name={'active' + num} checked={true} readOnly />

                <div className='controls'>
                    <label className='controls__button controls__button--back' htmlFor={num + 'C'}></label>
                    <label className='controls__button controls__button--next' htmlFor={num + 'B'}></label>
                </div>
                <div className='controls'>
                    <label className='controls__button controls__button--back' htmlFor={num + 'A'}></label>
                    <label className='controls__button controls__button--next' htmlFor={num + 'C'}></label>
                </div>
                <div className='controls'>
                    <label className='controls__button controls__button--back' htmlFor={num + 'B'}></label>
                    <label className='controls__button controls__button--next' htmlFor={num + 'A'}></label>
                </div>

                <img className='carousel__slide' src={image_1_URL} alt={obj_Name}></img>
                <img className='carousel__slide' src={image_2_URL} alt={obj_Name}></img>
                <img className='carousel__slide' src={image_3_URL} alt={obj_Name}></img>

                <div className='indicator'>
                    <label htmlFor={num + 'A'}><img className='indicator__thumb' src={image_1_URL} alt={obj_Name}></img></label>
                    <label htmlFor={num + 'B'}><img className='indicator__thumb' src={image_2_URL} alt={obj_Name}></img></label>
                    <label htmlFor={num + 'C'}><img className='indicator__thumb' src={image_3_URL} alt={obj_Name}></img></label>
                </div>
            </ul>
        );
    };

    export {Carousel};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/ 