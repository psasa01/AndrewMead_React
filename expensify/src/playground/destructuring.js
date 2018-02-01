// const person = {
//     name: 'Andrew',
//     age: 28,
//     location: {
//         city: 'Philly',
//         temp: 92
//     }
// };

// const {name, age} = person;
// console.log(`${name} is ${age}`);

// const {temp: temperature, city} = person.location;
// if (city && temperature)
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {title, author} = book;
// const {name: publisher} = book.publisher

// console.log(`'${title}' by ${author}. Published by ${publisher}`)

// array destructuring

const address = ['1299 S Juniper street', 'Philadelphia', 'Pensilvania', '19147'];

const [street, city, state, zip] = address;

console.log(`I live in ${city}, ${street}. ${zip}, ${state}`)

