import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Project from "./Components/Project"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Project/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
