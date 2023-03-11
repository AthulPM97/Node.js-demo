// const obj1 = { key1: 1 };

// const obj2 = { ...obj1 };

// if (obj2 === obj1) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
// }

// const a = {key1: 1, key2: 2};
// const b = {...a, key1: 1000};
// console.log(a);
// console.log(b)

// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
  
//   // Destructuring an object
//   const { name, age, address: { country } } = {...person};
//   console.log(name); // Output: John
//   console.log(age); // Output: 30
//   console.log(country); // Output: New York

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1


key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)
  