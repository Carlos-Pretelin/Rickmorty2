import React, { useState, useEffect } from 'react'
import "../styles/Characters.css"


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const API = "https://rickandmortyapi.com/api/character/";
    const morty = `${API}2`;
    const test = false

    useEffect( () => {
        fetch(API)
        .then( response => response.json())
        .then(data => setCharacters(data.results));
        
    }, []);


    //console.log(characters)
    //console.log(characters.image)
    return(
         <div className='Characters'>
             {characters.map((character) => (
                
                <div className='Characters-Card'>
                    
                    <img src={character.image} alt={`Foto de ${character.name}`} />

                    <div className={'Characters-info' }>

                        <span className={test ? "hola" : "hola2"}
                        >{character.name}</span>
                        <span>{`❤ Status :${character.status}`}</span>
                        <span>{`🧍 Species :${character.species}`}</span>
                        <span>{`👫 Gender :${character.gender}`}</span>

                    </div>
                    
                </div>
                
                 
            ) )}
            
         </div>

        

    );
}
export default Characters;