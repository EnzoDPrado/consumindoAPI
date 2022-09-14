'use strict'


import{dogSearch} from "./dogapi.js"

const criarImg = (endImg) => {
    const img = document.createElement('img');
    img.src = endImg;
    return img;
}

const dogGenerator = async () => {
    const type = document.getElementById('type').value;
    const showDogs = (await dogSearch(type));
    const galeria = document.getElementById('galeria');
    const tagDogs = showDogs.map(criarImg);
    galeria.replaceChildren(...tagDogs);


    
    
}

const handleKeyPress = (event) => {
    if(event.key == 'Enter')
    dogGenerator();
}

document.getElementById('type').addEventListener('keypress', handleKeyPress);





