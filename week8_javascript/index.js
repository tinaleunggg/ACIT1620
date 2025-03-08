let scoops = 5
while (scoops > 0){
    document.write("Another scoop!<br>");
    if (scoops < 3){
        alert("Ice cream is running low");
    } 
    else if (scoops >=5) {
        alert("Eat faster, the ice cream is melting");
    }

    scoops = scoops -1;
}
document.write("Life without ice cream isn't the same!");



let a = 10;
console.log(a);
console.log(typeof a);
a = "John";
console.log(a);
console.log(typeof a);
// it will work!
// dynamically typed : python, javascript
// statically types : java, c ++ (not allow change of data type)


console.log(Math.random()); // 0 to 1 (exclusive) -> 0.0000000001 to 0.999999999
//0.87568918919
console.log(Math.floor(Math.random()*100)); 
// Math.floor() always round down, return the largest integer
// 0.9999999*100 = 99.9999999
console.log(Math.floor(10 + Math.random()*100)); 
// 10 to 109

// to generate random number in a range:
// Math.floor( min +  Math.random() * ( max - min + 1 ))