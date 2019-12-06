/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Card component                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {useState, createRef} from 'react';
    import ApiFactory from '../../Axios-mock-adapter/ApiFactory';
    import './_add.scss';

    const Add = (props) => {

        const uploadInput = createRef();
        const [nameValue, setNameValue] = useState('');
        const [textareaValue, setTextareaValue] = useState('Tell us more about this product ...');
        const [priceValue, setPriceValue] = useState('');

        const handleSubmit = () => {
            const { history } = props;

            ApiFactory.getInstance().post('/api/products', { ...this.state })
            .then(() => {
                history.push('/products');
            });
        };

        const handleChange = (event) => {
            setNameValue(event.target.value);
            setTextareaValue(event.target.value);
            setPriceValue(event.target.value);
        };

        return (
            <main className="add">
                <h1 className="add__title">enter New product</h1>
                <form className="add-form" onSubmit={handleSubmit}>
                    <label className="name-label">
                        <h3 className="name-label__title">Product name</h3>
                        <input className="name-label__input" type="text" name="name" value={nameValue} onChange={handleChange} />
                    </label>

                    <label className="description-label">
                        <h3 className="description-label__title">Product description</h3>
                        <textarea className="description-label__input" type="text" name="description" value={textareaValue} onChange={handleChange} />
                    </label>

                    <label className="price-label">
                        <h3 className="price-label__title">Product price / kg</h3>
                        <input className="price-label__input" type="number" name="price" value={priceValue} onChange={handleChange} />
                    </label>

                    <label className="upload-label">
                        <h3 className="upload-label__title">Product image</h3>                    
                        <input className="upload-label__input" type="file" name="upload" ref={uploadInput} />
                    </label>
                    <button className="add-form__submit">Add</button>
                </form>
            </main>
        );
    };

    export {Add};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/