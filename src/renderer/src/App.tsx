import Testing from "./components/Testing"
import {HashRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"


function App(){

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
