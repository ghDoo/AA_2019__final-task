/*|                                                                                                    |
  |                 Adapt front-end Academy 2019 | final task by Donatas Dereškevičius                 |
  |                                                                                                    |
  |                                        Card component                                              |
  |                                                                                                    |
__|____________________________________________________________________________________________________|__
  |                                donatas.dereskevicius@gmail.com                                     |*/


    import React, {useState, useEffect} from 'react';

    import ApiFactory from '../../Axios-mock-adapter/ApiFactory';
    import {AdminCard} from '../../Components/Body/Cards/AdminCard';
    import {AddCard} from '../../Components/Body/Cards/AddCard';
    import './_admin.scss';

    const AdminContent = (props) => {

        const [admin, setIsAdmin] = useState('');
        const [num1, setNum1] = useState("");
        const [num2, setNum2] = useState("");
        const [num3, setNum3] = useState("");
        const [num4, setNum4] = useState("");
        const [num5, setNum5] = useState("");
        const [num6, setNum6] = useState("");
        const [num7, setNum7] = useState("");
        const [error, setError] = useState('');

        console.log(admin);

        useEffect(() => {
            ApiFactory.getInstance().get('/api/is-admin')
            .then(({data}) => {
                setIsAdmin(data.isAdmin)})
            .catch((error) => {
                setError(error.res)});
        }, [error]);

        useEffect(() => {
            setNum1(1);
            setNum2(2);
            setNum3(3);
            setNum4(4);
            setNum5(5);
            setNum6(6);
            setNum7(7);
        }, []);

        let url = props.url;


        return (
            <main className="items">
                <AddCard url={url} />
                <AdminCard num={num1} />
                <AdminCard num={num2} />
                <AdminCard num={num3} />
                <AdminCard num={num4} />
                <AdminCard num={num5} />
                <AdminCard num={num6} />
                <AdminCard num={num7} />
            </main>
        );
    };

    export {AdminContent};

/*|____________________________________________________________________________________________________|
  |                                                                                                    |
  |                                  Adapt front-end Academy 2019                                      |
__|____________________________________________________________________________________________________|__
  |                                                                                                    |*/