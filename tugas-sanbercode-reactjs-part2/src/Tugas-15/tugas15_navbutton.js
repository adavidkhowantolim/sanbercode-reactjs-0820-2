import React, {useContext} from "react"
import {NavContext} from "./tugas15_context"
import './tugas15.css';

const FruitTable = () =>{
  const [isLightTheme, setIsLightTheme] = useContext(NavContext);

  const handleNavTheme = () => {
    setIsLightTheme(!isLightTheme);
    console.log(!isLightTheme);
  }

  const navTheme = () => {
    if (isLightTheme) {
      return "light_theme";
    } else {
      return "dark_theme"
    }
  };
  return (
    <>
    <button className={isLightTheme?"button_nav_light": "button_nav_dark"} onClick={handleNavTheme}>Change Navbar to {isLightTheme?"Dark": "Light"} Theme</button>
    </>
  );
}

export default FruitTable
