import React from 'react';
import { addToDb, removeFromDb } from '../Utilities/fakeb';

const Cosmetic = (props) => {
     const {name, email, id}= props.cosmetic;

    

    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }

    return (
        <div>
            <h1>name: {name} </h1>
            <p>email: {email}</p>
            <p> its id: {id}c</p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() =>removeFromCart(id) }>Remove Cart</button>
        </div>
    );
};

export default Cosmetic;