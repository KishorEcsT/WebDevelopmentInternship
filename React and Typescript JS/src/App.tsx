import{Routes, Route, Form} from "react-router-dom"
import{Container} from 'react-bootstrap'
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Menu } from "./pages/Menu"
import {Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return ( 
    <>
  <Navbar/>
  <Container className="mb-4">
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/menu" element = {<Menu />} />
      <Route path="/about" element = {<About />} />
    </Routes>
  </Container>
  </>
  )
}

export default App 
