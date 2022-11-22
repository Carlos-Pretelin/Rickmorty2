import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Characters from "./components/Characters.jsx";
import themeContext from "./context/themeContext.js";

function App() {

  const [theme, setTheme] = useState("light")
  const toggleTheme = () =>{
    setTheme( (current)=> (current === "light") ? "dark" : "light")
  }



  return (
    <div className="App" id={theme}>
     <themeContext.Provider value={{theme, toggleTheme}}>
        <Header></Header>
        <Characters></Characters>
     </themeContext.Provider>
     

     
    </div>
  );
}

export default App;
