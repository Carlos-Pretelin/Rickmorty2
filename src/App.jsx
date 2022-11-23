import React, { useContext, useState } from "react";
import Header from "./components/Header.jsx";
import Characters from "./components/Characters.jsx";
import themeContext from "./context/themeContext.js";
import useTheme from "./hooks/useTheme.js";

function App() {

  // const [theme, setTheme] = useState("light")
  // const toggleTheme = () =>{
  //   setTheme( (current)=> (current === "light") ? "dark" : "light")
  // }

  const themeData = useTheme();
  const {theme} = themeData
  


  return (
    // <div className="App" id={theme}>
    <div className="App" id={theme}>
    {/* <themeContext.Provider value={{theme, toggleTheme}}> */}
     <themeContext.Provider value={themeData}>
        <Header/>
        <Characters/>
     </themeContext.Provider>
     

     
    </div>
  );
}

export default App;
