import React, { useState } from 'react'


const Header01 = () => {
    const [darkmode, setDarkMode] = useState(true);

    const handleClick = () => {
        setDarkMode(!darkmode)

    }
    return(
        <div className='Header'>
            <h1>React Hooks</h1>
            {/* <button 
            type='button'
            onClick={handleClick}
            >{darkmode ? "Dark Mode" : "Light Mode"}</button> */}
            <a 
            onClick={handleClick}
            class="my-button" href="#"><span></span>{darkmode ? "Dark Mode" : "Light Mode"}</a>
        </div>
    );
}

export default Header01;