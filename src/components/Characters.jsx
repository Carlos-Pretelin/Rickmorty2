import React, { useState, useEffect } from 'react'
import useCharacters from '../hooks/useCharacters';
import useTheme from '../hooks/useTheme';
import "../styles/Characters.css"


const Characters = () => {
    
    const API = "https://rickandmortyapi.com/api/character/";
    const characters = useCharacters(API);
    const {darkTheme} = useTheme();
    
    const test = false

    return(
         <div className='Characters'>
             {characters.map((character) => (
                
                <div className='Characters-Card'>
                    
                    <img src={character.image} alt={`Foto de ${character.name}`} />

                    <div className={'Characters-info' }>

                        <span
                        onChange={darkTheme}
                         className={darkTheme ? "hola" : "hola2"}
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