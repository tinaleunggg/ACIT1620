/*
**** EXAM ****
Different between JS object vs JSON object 
they are both name, value pairs separated by comma
JS object key need not to be string, JSON object name must be string, 
Object can have function, JSON cannot

JSON value can be objectt (another json)

HTML and JSON are both hierarchial, can be fetched

Common use of JSON: 
exchange data with web server
can parse data with json.parse() to make it a JS object

JSON.parse( string )            - return a JS object
JSON.stringify( JSON Object )   - return a JSON string
*/


let personJSON = {
    "name": "Bob",
    "age" : 18,
    "email" : "bob@gmail.com",
    "skills" : ["HTML", "CSS", "JS"]
}

let personObject = {
    name: "Bob",
    age : 18,
    email : "bob@gmail.com",
    skills : ["HTML", "CSS", "JS"]
}

let jsonString = '{"name": "Bob", "age" : 18,"email" : "bob@gmail.com", "skills" : ["HTML", "CSS", "JS"]}'  // you get this from server
const obj = JSON.parse(jsonString);
console.log(obj.name)