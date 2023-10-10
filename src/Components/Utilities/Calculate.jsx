const add = (first, second) => {
    return first+second;
}

const multiply = (first,second) => {
    return first * second;
}

// const numbers = [20, 24, 235, 72];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce( sumReducer, 0);



// const items = [
//     {id:1, name:'alia', price: 100},
//     {id:2, name:'alia', price: 300},
//     {id:3, name:'alia', price: 400},

// ]
// const itemSumReducer = (previous , current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);


const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0)
    return total;
}

export  {add, multiply, getTotalPrice};