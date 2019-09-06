/*
JSX code.
const name = 'Josh Perez';
const element = `<h1>Hello, ${name}</h1>`;

ReactDOM.render(
    element,
    document.getElementById('root')
);
*/

// Js alternative. Should be transpiled from JSX, however difficult to setup.
"use strict";

var name = 'Nathaniel Pather';
var element = React.createElement("h1", null, "Hello, ", name);
ReactDOM.render(element, document.getElementById('hello_container'));