import React from "react";

function Header({ isDarkMode, onDarkModeClick }){
  return(
      <header>
          <h2>Shopster</h2>
          <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
          </button>
      </header>
  )
}



export default Header;



// from App.js 
{/* <header>
    <h2>Shopster</h2>
    <button onClick={handleDarkModeClick}> {isDarkMode ? "Dark" : "Light"} Mode
    </button>
 </header> */}