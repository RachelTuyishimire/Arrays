// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]
const digits = [3,7,34,90,12];
let last = digits.slice(-1);
console.log(last)
const elements = [true, "green", "where", 12, 56];
let last1 = elements.slice(-1);
console.log(last1)


// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];

const myPets = ["cow", "Bird", "Snake", "Dog"];
let pets = myPets.toString();
console.log(pets)


// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

const num = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
let arrange = num.sort();
console.log(arrange)

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];

const fruits = ["apple", "mango", "apple","orange", "mango", "mango"];
let fruits1= [new Set(fruits)];
console.log(fruits1);



// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
function look(arr5){
    if(arr5.find="way"){
        console.log("way");
    }else{
        console.log("the search word was not found")
    }
}
console.log(look(arr5));


//  Write a JS script to sort the following string
// let word = "sevink"

let word = "sevink"
 let order=(word)=>{
return word .split("").sort().join("");
 };
 console.log(order("sevink"))