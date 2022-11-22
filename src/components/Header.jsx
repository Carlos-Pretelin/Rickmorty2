import React, { useState } from 'react'
import useTheme from "../hooks/useTheme.js"


const Header01 = () => {



    //mi hook
    const {darkTheme, handleThemeChange} = useTheme();
    
    



    // LAs de Platzi si funcionan 
    // const [darkmode, setDarkMode] = useState(true);
    // const handleClick = () => {
    //     setDarkMode(!darkmode)

    // }


    return(
        <div className='Header'>
            <h1>React Hooks</h1>


            {/* <button 
            type='button'
            onClick={handleClick}
            >{darkmode ? "Dark Mode" : "Light Mode"}</button> */}



            <a 
            onClick={handleThemeChange}
            class="my-button" href="#"><span></span>{darkTheme ? "Dark Mode" : "Light Mode"}</a>

        
            




        </div>
    );
}

export default Header01;