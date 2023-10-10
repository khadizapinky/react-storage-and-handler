import React, { useEffect, useState } from 'react';

import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] =  useState([]);
    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setCosmetics(data));

    },[])
    // const first = 39;
    // const second = 75;
    // const total = add(first, second);

    // const sum = multiply(first, second);
    return (
        <div>
            <h1>Cosmetics are avaible</h1>


            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key= {cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }


        </div>
    );
};

export default Cosmetics;