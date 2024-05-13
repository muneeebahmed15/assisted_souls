import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Screens/Home"
import Contact from "./Screens/Contact"
import GymSplit from "./Screens/GymSplit"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="/contact" element={<Contact/>}/>

      <Route path="/gym-split" element={<GymSplit/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
