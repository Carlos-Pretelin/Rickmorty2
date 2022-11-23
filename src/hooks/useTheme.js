import {useEffect, useState} from 'react'

const useTheme = () => {


     const [theme, setTheme] = useState("Light-Mode")


      const toggleTheme = () =>{
        setTheme( (current)=> (current === "Light-Mode") ? "Dark-Mode" : "Light-Mode")
      }


  return {theme, toggleTheme}
    
    
  
}

export default useTheme