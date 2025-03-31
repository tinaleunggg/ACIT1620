// event handler : a function call when event happen
// event listerner : a property of HTML element, onclick, onmouseover,...

// window.onload = theEventHandler;     the functiona is assigned to the window's onload property

// event are handled one at a time -> write event handle that is short and efficient, 
// avoid long and complex logic

// ***** remember the property from the events soups

window.onload = eventHandler;

function eventHandler(eventObj){
    let theElement = eventObj.target;   // return the element itself
    let name = theElement.id            // access the id of the HTML element, like access a normal HTML element in JS

    eventObj.clientX;
    eventObj.clientY;                   // access property of the EVENT object https://www.w3schools.com/jsref/dom_obj_event_prop.asp

}


document.addEventListener("keydown", function(event){
    document.getElementById("keyoutput").textContent = `key pressed: ${event.key}`;
})