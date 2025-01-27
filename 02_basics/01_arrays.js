// Arrays

const myArray = [0,1, 2, 3, 4, 5]
// const myHero = ["shaktiman", "naagraj"]
// const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArray[1])
// console.log(myHero[0])
// console.log(myArr2)

// Array Methods

//myArray.push(6)
//myArray.pop()
//myArray.unshift(9)
//myArray.shift();

//console.log(myArray.includes(9));
//console.log(myArray.indexOf(2));
const newArray = myArray.join();
// console.log(typeof myArray);           
// console.log(typeof newArray); 
const sliceArray = ['S', 'L', 'I', 'C', 'E'];
 // 0  1  2  3  4
// [S, L, I, C, E]
// -5 -4 -3 -2 -1

const myn1 = sliceArray.slice(1, -2);
// console.log("A ", sliceArray);
// console.log(myn1);

const spliceArray = ['S', 'P', 'L', 'I', 'C', 'E'];
 // 0  1  2  3  4  5
// [S, P, L, I, C, E]
// -5 -4 -3 -2 -2 -1

// const myn2 = spliceArray.splice(1, 4);
// console.log("C ", sliceArray);
// console.log(myn2);

const arr1 = [0, 1, 2, 3, 4, 5]
const arr2 = [4, 5]
//arr1.push(arr2);

const final_array = arr1.concat(arr2);

//console.log(final_array);

//console.log(...arr1, ...arr2);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//console.log(another_array.flat(Infinity));

//console.log(Array.isArray("Ashish"))
//console.log(Array.from("Ashish"));
//console.log(Array.from({name: "Ashish"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
//console.log(Array.of(score1, score2, score3));


