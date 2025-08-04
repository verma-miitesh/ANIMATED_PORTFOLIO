import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import FluidCursor from "./components/cursify/FluidCursor"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Projects from "./components/Projects/Projects"

function App() {


  return (
    <>
      <FluidCursor />
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
