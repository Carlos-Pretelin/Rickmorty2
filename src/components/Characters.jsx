import React, { useState, useEffect, useContext } from 'react'
import useCharacters from '../hooks/useCharacters';
import themeContext from '../context/themeContext';
//import "../styles/Characters.css"


const Characters = () => {
    
    const API = "https://rickandmortyapi.com/api/character/";
    const characters = useCharacters(API);
    const {theme} = useContext(themeContext)
    
    
    

    return(
         <div className='Characters' id={theme === "Light-Mode" ? "Light-Mode" : "Dark-Mode"}>
             {characters.map((character) => (
                
                <React.Fragment
                key={character.name}>
                <div className='Characters-Card'>
                    
                    <img src={character.image} alt={`Foto de ${character.name}`} />

                    <div className={'Characters-info' }>

                        <span
                         //className={theme === "Light-Mode" ? "hola" : "hola2"}
                        >{character.name}</span>
                        
                        <span>{`❤ Status :${character.status}`}</span>
                        <span>{`🧍 Species :${character.species}`}</span>
                        <span>{`👫 Gender :${character.gender}`}</span>

                    </div>
                    
                </div>
                </React.Fragment>
                
                 
            ) )}
            
         </div>

        

    );
}
export default Characters;