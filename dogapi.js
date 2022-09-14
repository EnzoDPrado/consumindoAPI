'use strict'

const dogSearch =async (breed) =>{
    const url = `https://dog.ceo/api/breed/${breed}/images`;

    const response = await fetch(url);

    const dogsList = await response.json();


    return dogsList.message;

}

export{
    dogSearch,
}