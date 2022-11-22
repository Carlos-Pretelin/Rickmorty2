import {useEffect, useState} from 'react'

const useTheme = () => {

    const [darkTheme, setDarkTheme] = useState(true);


     const handleThemeChange = () => {
        setDarkTheme(!darkTheme)
        console.log("culo")

     }
     

    // const tema = () => {
    //   setDarkTheme(!darkTheme)
    //   console.log("cambio el tema !")
    // }
  


  return {darkTheme, handleThemeChange}
    
    
  
}

export default useTheme