import React, { useState, useEffect } from 'react'
import "../styles/Characters.css"


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const API = "https://rickandmortyapi.com/api/character/";
    const morty = `${API}2`;

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

                    <div className='Characters-info'>

                        <h2>{character.name}</h2>
                        <h4>{character.status}</h4>
                        <h4>{character.species}</h4>
                        <h4>{character.gender}</h4>
                        
                    </div>
                    
                </div>
                
                 
            ) )}
            
         </div>

        

    );
}
export default Characters;