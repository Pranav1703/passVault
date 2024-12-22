import Testing from "./components/Testing"
import {HashRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import { Signup } from "./components/auth/Signup"
import { Login } from "./components/auth/Login"
import { createContext, useState } from "react"


export const AuthContext = createContext({
  loggedIn: false,
  login: ()=>{},
  logout: ()=>{},
  userId: -1,
  setId: (_id:number)=>{}
})

function App(){

  const [loggedIn,setLoggedIn] = useState<boolean>(false)
  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);
  const [userId,setUserId] = useState<number>(-1)
  const setId = (id:number)=> setUserId(id)
  return (
    <>
      <AuthContext.Provider value={{loggedIn,login,logout,userId,setId}}>
        <HashRouter>
          <Routes>
            <Route path="/testing" element={<Testing/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/" element={<Login/>} />
          </Routes>
        </HashRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App
