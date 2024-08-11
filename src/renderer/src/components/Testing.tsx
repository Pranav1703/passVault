import { useState } from "react"
import {
    Button
} from "@chakra-ui/react"

const Testing = () => {

  const [n,setN] = useState("")
  const [s,setS] = useState("")

  
  const create = (): void =>{
    window.api.Create(Number(n),s)
    setS("")
    setN("")
  }
  const retreiveAllData = (): void =>{
    window.api.GetData()
  }

    return (
      <>
      <br />
        <label htmlFor="n">number: </label><input type="text" value={n} name="n" onChange={(event)=>setN(event.target.value)}  style={{"color":"black"}}/>
        <br />
        <label htmlFor="s">string: </label><input type="text" value={s} name="s" onChange={(event)=>setS(event.target.value)} style={{"color":"black"}}/>
        <br />
        <Button onClick={create}>
              create
        </Button>
  
        <Button onClick={retreiveAllData}>
          log data
        </Button>

      </>
    )
}

export default Testing