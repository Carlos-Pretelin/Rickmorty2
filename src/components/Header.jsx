import React, { useState, useContext } from 'react'
import useTheme from "../hooks/useTheme.js"
import themeContext from '../context/themeContext.js';


const Header01 = () => {



    //mi hook
    //const {darkTheme, handleThemeChange} = useTheme();
    
    const {theme, toggleTheme} = useContext(themeContext);



    // Las de Platzi si funcionan 
    // const [darkmode, setDarkMode] = useState(true);
    // const handleClick = () => {
    //     setDarkMode(!darkmode)

    // }


    return(
        <div className='Header'>
            <h1>React Hooks</h1>



           

            <a 
            onClick={toggleTheme}
            class="my-button" href="#"><span></span>{theme === "Light Mode" ? "Light Mode" : "Dark Mode"}</a>

        
            




        </div>
    );
}

export default Header01;