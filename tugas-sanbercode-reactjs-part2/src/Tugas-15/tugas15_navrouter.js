import React, {useContext} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../Tugas-9/tugas9.js";
import Tugas10 from "../Tugas-10/tugas10.js";
import Tugas11 from "../Tugas-11/tugas11.js";
import Tugas12 from "../Tugas-12/tugas12.js";
import Tugas13 from "../Tugas-13/tugas13.js";
import Tugas14 from "../Tugas-14/tugas14.js";

import NavButton from "./tugas15_navbutton"
import {NavContext} from "./tugas15_context"
import './tugas15.css';

const NavRouter = () =>{
  const [isLightTheme, setIsLightTheme] = useContext(NavContext);

  return (
    <Router>
      <div className={isLightTheme?"div_light":"div_dark"}>
        <nav>
          <ul className={isLightTheme?"ul_nav_light": "ul_nav_dark"}>
            <li>
              <NavButton/>
            </li>
            <li>
              {/* Tugas 9 */}
              <Link className={isLightTheme?"a_nav_light": "a_nav_dark"} to="/" >Home</Link>
            </li>
            <li style={{float:"right"}}>
              <Link className={isLightTheme?"a_nav_light": "a_nav_dark"} to="/Tugas-10">Tugas-10</Link>
            </li>
            <li style={{float:"right"}}>
              <Link className={isLightTheme?"a_nav_light": "a_nav_dark"} to="/Tugas-11">Tugas-11</Link>
            </li>
            <li style={{float:"right"}}>
              <Link className={isLightTheme?"a_nav_light": "a_nav_dark"} to="/Tugas-12">Tugas-12</Link>
            </li>
            <li style={{float:"right"}}>
              <Link className={isLightTheme?"a_nav_light": "a_nav_dark"} to="/Tugas-13">Tugas-13</Link>
            </li>
            <li style={{float:"right"}}>
              <Link className={isLightTheme?"a_nav_light": "a_nav_dark"} to="/Tugas-14">Tugas-14</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Tugas-10" component={Tugas10}/>
          <Route exact path="/Tugas-11" component={Tugas11}/>
          <Route exact path="/Tugas-12" component={Tugas12}/>
          <Route exact path="/Tugas-13" component={Tugas13}/>
          <Route exact path="/Tugas-14" component={Tugas14}/>
        </Switch>
      </div>
    </Router>
  )
}

export default NavRouter
