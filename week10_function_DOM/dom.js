let access = document.getElementById("code9");             // return an element object
let code = access.innerHTML;
code = code + " midnight";
alert(code);

/*

Node list : 
    can contain HTML elements, text node and other nodes
    .querySelectorAll() - static - does not reflect changes in HTML elements
    .childNodes

HTML Collection:
    only contain HTML elements, always live Collection
    .getElementsByClassName()
    .getElementsByTagName()
    .children

Both have: 
    lenght property
    access by index
HTML collection:
    can also access items by name and id
    no looping, no forEach()
Node list
    have forEach()

*/

function changeColor(){
    let elements = document.getElementsByClassName("highlight");
    for (let i = 0 ; i < elements.length; i++){
        elements[i].style.color = "red";
    }
}
function changeFontSize(){
    let elements = document.getElementsByTagName("p");

    for (let i = 0 ; i < elements.length ; i++){
        elements[i].style.fontSize = "50px";
    }

    for (let element of elements){
        element.style.fontSize = "50px";
    }

}
function changeText(){
    let firsthighlight = document.querySelector(".highlight");
    firsthighlight.innerHTML = "new text";
}
function changeColors(){
    let elements = document.querySelectorAll(".highlight");

    elements.forEach(el =>{     // forEach() takes a function as argument
        el.style.color = "blue";
    });

    let fuc = el => {el.style.color = "blue";}
    elements.forEach(fuc);
}



// list.forEach( function, optiona arguement to be used as this.)


