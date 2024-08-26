import Testing from "./components/Testing"
import {HashRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"


function App(){

  console.log(window.api.log())
  

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/testing" element={<Testing/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </HashRouter>
      
    </>
  )
}

export default App
