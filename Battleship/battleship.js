let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [
        {locations: [0,0,0], hits: ['','','']},
        {locations: [0,0,0], hits: ['','','']},
        {locations: [0,0,0], hits: ['','','']}
    ],
    fire: function(guess) {
        for (let i = 0; i< this.numShips; i++){
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (ship.hits[index]=== "hit"){
                view.displayMessage("Opps, you already hit this location")
            } 
            else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                
                if (this.isSunk(ship)){
                    view.displayMessage("you sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        
        }
        view.displayMiss(guess);
        view.displayMessage("you missed");
        return false

    },

    isSunk: function(ship) {
        for (let i = 0; i < this.shipLength; i++){
            if (ship.hits[i] != "hit"){
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function(){
        let locations;
        for (i = 0; i < this.numShips; i++){
            do {
                locations = this.generateShip();
            } 
            while (this.collision(locations));    // different between while(){ ... }     ?

            this.ships[i].locations = locations;
        }
        console.log("Ships array: ");
        console.log(this.ships);

    },

    generateShip: function(){
        let direction = Math.floor(Math.random()*2);
        let row, col;
        if (direction === 1){ // horizontal  === is strict equal == for comparision
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength +1));
        } else {   // vertical
            col = Math.floor(Math.random() * this.boardSize);
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength +1));
        }

        let newShipLocation = [];
        for (let i = 0; i < this.shipLength; i++){
            if (direction === 1){
                newShipLocation.push(row + "" + (col +i));
            } else {
                newShipLocation.push((row + i) + "" + col);
            }
        }
        return newShipLocation;

    },

    collision: function(locations){
        for (let i = 0; i < this.numShips; i++){
            let ship = this.ships[i];
            for (let j = 0; j < this.shipLength; j++){
                if (ship.locations.indexOf(location[j]) >= 0){   // ????
                    return true;
                }
            }
        }
        return false;
    }
};

let view = {
    displayMessage: function(msg){
        // hit or miss
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(locations){
        let cell = document.getElementById(locations);
        cell.setAttribute("class", "hit");

    },
    displayMiss: function(locations){
        let cell = document.getElementById(locations);
        cell.setAttribute("class", "miss");
    }
};

let controller = {
    guesses: 0,
    processGuess: function(guess){ // check if the guess is hit / sunk or not
        let location = pasrseGuess(guess);
        if (location){
            this.guesses ++;
            let hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("you sunk all my battle ships in" + this.guesses + "guesses");
            }
        }
    },

};


// helper function to parse a guess from the user, validate the guess
function pasrseGuess(guess){
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2){
        alert("Oops, please enter a letter and a number on the board");
    }
    else{
        let firstChar = guess.charAt(0);  // get the character at the index
        let row = alphabet.indexOf(firstChar);
        let column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)){
            alert("Oops, that isn't on the board");
        }
        else if ( row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){
            alert("Oops, that's off the board");
        }
        else{
            return row+column;
        }
    }
    return null;
}


// event handlers
function handleFireButton(){
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.toUpperCase();
    controller.processGuess(guess);
    guessInput.value = "";
}

function handleKeyPress(e){
    e = e || window.event;
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13){  // key code 13 is enter key
        fireButton.click();
        return false;
    }

}

// init - called when the page has completed loading
window.onload = init;

function init(){
    // Fire button onclick handler
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    // place the ship on the game board
    model.generateShipLocations();


}