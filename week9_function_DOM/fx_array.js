/* 

stack frames is created when a function is called, after executing the fx, it will exti to the main frame, 
.push()
.pop          remove the top element
.peek         

parameter: used when defining fx, argument: actual values passed to fx
amy primitive type can be passed as argument:
- boolean expression (x == 5)
- array
- strings ....

pass by value            values are passed to the the function and a copy is created 
pass by reference        reference to the memory location of the list is passed into the function, instead of creating a copy of values list for its own

def swap(values): 
    temp = values[0]
    values[0] = values[4]
    values[4] = temp

numbers = [1,2,3,4,5]
print(numbers)       # return 1,2,3,4,5
swap(numbers)        # pass by reference
print(numbers)       # return 5,2,3,4,1


Missing argument:
- missing argument will be set to undefined and passed into the function
Too many arguments:
- will be ignored


--------------

primitive : only same data type
array : can have different data type
python : dynamically typed 

ARRAY methods
.push(item)              add items to the end
.pop()
.shift()
.unshift(item)           add items to the beginning
.indexOf(item);          return first index of items, only 1 
.lastIndexOf(item);      return last index of items
.indexOf(item);          return -1 (means not found)
.includes(item);         return boolean value
.slice(start, end);
array.concat(array)      return array concatenating two array
array.join(" string ")   return string joing everything inside the array, joined by the specified string
string.split(" string ") return array of strings seperated by the specified string
        let sentence = "Javascript is fun"
        let arr = sentence.split(" ")     // ["Javscript", "is", "fun"]

*/

let x = 32;
let y = 44;
let radius = 5;
let centerX = 0;
let centerY = 0;
let width = 600;
let height = 400;

function setUp(width, height){
    centerX = width / 2;
    centerY = height / 2;
}

function computeDistance(x1, y1, x2, y2){
    let dx = x1 - x2;
    let dy = y1 - y2;
    let d2 = (dx*dx) + (dy*dy);
    let d = Math.sqrt(d2);
    return d;
}


function circleArea(r){
    let area = Math.PI * r * r;
    return area;
}


setUp(width,height);
let area = circleArea(radius);
let distance = computeDistance(x ,y, centerX, centerY);
console.log("Area: " + area);
console.log("distance: " + distance);

// ARRAY   .push()  new Array()

let numbers = new Array(1,2,3,4,5);     // constructor, create new array
let num = new Array(5);     // expected : [5]  - incorrect - create empty array of 5 elements
// let num1 = new Array.of(5);     //  [5]

numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(0);    // add items in beginning
numbers.shift(0);       // remove items in beginning

numbers.indexOf(2);    // return first index of items, only 1 
numbers.lastIndexOf(2);    // return last index of items
numbers.indexOf(7);    // return -1 (means not found)

numbers.includes(5);    // return boolean value

numbers.slice(0,3);



// -------------- ARROW FUNCTION --------------

function sum(a, b){
    return a + b;
}
console.log(sum(1,2));

const add = (a, b) => a + b;  // no block, apply for function with only one single line
console.log(add(1,2));

const multiply = (a,b) =>{
    console.log(`Multiplying ${a} and ${b}`);
    return a*b;
}

const square = x => x*x;

const greet = () => "Hello world!";
console.log(greet());

