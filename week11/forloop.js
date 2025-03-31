let list = ['a', 'b', 'c', 'd'];
let words = "this is a string";

/* 
for .. of ... 

iterable: array, string, object, map, set, a node list (a list of element returned by element selectors)

*/


// 1. DECLARE VARIABLE USING 'var' 'const' 'let'
for (var item of words){
    item = item + '10'
    console.log(item);
}
console.log(item)  // work : item declared with 'var' in the loop, exist in the same scope of the loop

for (const cons of list){
    // cons = cons + '10';    // not work : const cannot be reassign
    console.log(cons);
}
// console.log(cons)  // not work : item declared with 'const' in the loop, exist only inside the loop, 
// a new const can be created in next loop, but not editing it in the same loop

for (let cons of list){
    cons = cons + '10'; 
    console.log(cons);
}
// console.log(cons)  // not work : item declared with 'let' in the loop, exist only inside the loop



// 2. LOOP THROUGH ARGUMENTS TO FUNCTION
function foo() {
    for (const value of arguments) {   // 'arugments' is the object that represent arugments passed into the function
      console.log(value);
    }
  }
  
foo(1, 2, 3);
  // 1
  // 2
  // 3


  // 3. LOOP THROUGH NODE LIST
// let elements = document.getElementsByTagName("p");
// for (let i = 0 ; i < elements.length ; i++){
//     elements[i].style.fontSize = "50px";
// }

// for (let element of elements){
//     element.style.fontSize = "50px";
// }