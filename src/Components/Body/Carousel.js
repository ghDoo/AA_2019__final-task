/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                      Carousel component                                            |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from "react";

    const Carousel = (props) => {

        let data = props.data;
        let num = data.id;
        let obj_Name = data.name;
        let image_1_URL = data.images[0].url;
        let image_2_URL = data.images[1].url;
        let image_3_URL = data.images[2].url;

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