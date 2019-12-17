/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Card component                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React from "react";
    import history from "../../history";
    import { NewProductCard } from "./NewProductCard";
    import { Carousel } from "./Carousel";

    const Card = (props) => {

        const data = props.data;

        const admin = props.admin;

        if(admin.admin === true) {
            return (
                <ul className="items-box">
                    <NewProductCard />
                    {data.map(data => (
                        <li className="card" key={data.id}>
                            <Carousel data={data} />
                            <p className="card__title"> {data.name} </p>
                            <p  className="card__price"> {data.price} / kg </p>
                            <button className="card__button" type="button" onClick={(e)=> {props.EditProduct(data.id, e); history.push('/edit');}}> EDIT </button>
                            <button className="card__button--delete" type="button" onClick={(e)=> {props.DeleteProduct(data.id, e); history.push('/');}}> DELETE </button>
                            <p   className="card__description"> {data.description} </p>
                        </li>
                    ))}
                </ul>
            );
        } else {
            return (
                <ul className="items-box">
                    {data.map(data => (
                        <li className="card" key={data.id}>
                            <Carousel data={data} />
                            <p className="card__title"> {data.name} </p>
                            <p  className="card__price"> {data.price} / kg </p>
                            <button className="card__button" onClick={() => props.AddToCart(data)}> Shovel to bag <span className="card__button--buy" role="img" aria-label="cart">&#128722;</span></button>
                            <p   className="card__description"> {data.description} </p>
                        </li>
                    ))}
                </ul>
            );
        };
    };
    
    export {Card};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/