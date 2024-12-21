import Testing from "./components/Testing"
import {HashRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import { Signup } from "./components/auth/Signup"
import { Login } from "./components/auth/Login"


function App(){

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/testing" element={<Testing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </HashRouter>
      
    </>
  )
}

export default App
