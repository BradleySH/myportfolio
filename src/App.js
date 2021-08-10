import React, {useState} from "react"
import "./app.scss"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Project from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Menu from "./components/Menu"


function App() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div className="App">
      <Navbar open={hamburgerOpen} setOpen={setHamburgerOpen}/>
      <Menu open={hamburgerOpen} setOpen={setHamburgerOpen}/>
      <div className="sections">
        <Main />
        <Project />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
