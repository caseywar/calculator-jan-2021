import { myClickHandler, multClickHandler, subClickHandler, divClickHandler } from './handlers.js';


const addButton = document.getElementById('add-button');
addButton.addEventListener('click', myClickHandler);


const subButton = document.getElementById('sub-button');
subButton.addEventListener('click', subClickHandler);



const multButton = document.getElementById('mult-button')
multButton.addEventListener('click', multClickHandler);



const divButton = document.getElementById('div-button');
divButton.addEventListener('click', divClickHandler);


