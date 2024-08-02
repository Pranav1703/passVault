import Testing from "./components/Testing"
import {HashRouter,Routes,Route} from "react-router-dom"

import Navigate from "./components/navigate"
function App(){


  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/testing" element={<Testing/>} />
          <Route path="/" element={<Navigate/>} />
        </Routes>
      </HashRouter>
      
    </>
  )
}

export default App
