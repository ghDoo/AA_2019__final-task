/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                  Get Top Products component                                        |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {useState, useEffect} from 'react';
    import ApiFactory from '../../../Axios-mock-adapter/ApiFactory';
    import {filter, map, nth} from 'lodash';
    import './_topProducts.scss';

    const GetTopProducts = () => {

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

        let obj1Name;
        let obj1Desc;
        let img1Url;

        const getObj1 = () => {
            let obj = filter(value, obj => obj.id === 1);               // get object by {id: 1}
            obj1Name = map(obj, 'name');                                // get name of that object
            obj1Desc = map(obj, 'description');                         // get object description 
            let imagesArray = map(obj, 'images');                       // get array of images
            let imagesObj = nth(imagesArray, 0);                        // convert array to array of objects
            let objImage = filter(imagesObj, obj => obj.id === 101);    // get image with {id: 101}
            img1Url = map(objImage, 'url');                             // get url of that image
        };

        let obj2Name;
        let obj2Desc;
        let img2Url;

        const getObj2 = () => {
            let obj = filter(value, obj => obj.id === 2);               // get object by {id: 2}
            obj2Name = map(obj, 'name');                                // get name of that object
            obj2Desc = map(obj, 'description');                         // get object description 
            let imagesArray = map(obj, 'images');                       // get array of images
            let imagesObj = nth(imagesArray, 0);                        // convert array to array of objects
            let objImage = filter(imagesObj, obj => obj.id === 201);    // get image with {id: 201}
            img2Url = map(objImage, 'url');                             // get url of that image
        };

        let obj3Name;
        let obj3Desc;
        let img3Url;

        const getObj3 = () => {
            let obj = filter(value, obj => obj.id === 3);               // get object by {id: 3}
            obj3Name = map(obj, 'name');                                // get name of that object
            obj3Desc = map(obj, 'description');                         // get object description 
            let imagesArray = map(obj, 'images');                       // get array of images
            let imagesObj = nth(imagesArray, 0);                        // convert array to array of objects
            let objImage = filter(imagesObj, obj => obj.id === 301);    // get image with {id: 301}
            img3Url = map(objImage, 'url');                             // get url of that image
        };

        getObj1();
        getObj2();
        getObj3();

        return (
            <div className="list">
                <div className="list-item">
                    <img className="list-item__image" src={img1Url} alt={obj1Name}></img>
                    <div className="list-item__text">
                        <h1 className="list-item__text_title">{obj1Name}</h1>
                        <p  className="list-item__text_description">{obj1Desc}</p>
                    </div>
                </div>
                <div className="list-item">
                    <img className="list-item__image" src={img2Url} alt={obj2Name}></img>
                    <div className="list-item__text">
                        <h1 className="list-item__text_title">{obj2Name}</h1>
                        <p  className="list-item__text_description">{obj2Desc}</p>
                    </div>
                </div>
                <div className="list-item">
                    <img className="list-item__image" src={img3Url} alt={obj3Name}></img>
                    <div className="list-item__text">
                        <h1 className="list-item__text_title">{obj3Name}</h1>
                        <p  className="list-item__text_description">{obj3Desc}</p>
                    </div>
                </div>
            </div>
        );
    };

    export {GetTopProducts};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/