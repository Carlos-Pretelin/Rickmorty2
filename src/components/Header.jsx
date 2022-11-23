import React, { useState, useContext } from 'react'
import themeContext from '../context/themeContext.js';


const Header01 = () => {
 
    const {theme, toggleTheme} = useContext(themeContext);


    return(
        <div className='Header' id={theme === "Light-Mode" ? "Light-Mode" : "Dark-Mode"}>
            <h1>React Hooks</h1>      

            <a 
            onClick={toggleTheme}
            className="my-button" href="#"><span></span>{theme === "Light-Mode" ? "Light-Mode" : "Dark-Mode"}</a>

           



        </div>
    );
}

export default Header01;