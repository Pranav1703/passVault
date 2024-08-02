import { useState } from "react"
import {
    Button
} from "@chakra-ui/react"
import { Navigate, useNavigate } from "react-router-dom"

const Testing = () => {
    const oneWayPattern = (): void => window.api.ping()

    const [path, setPath] = useState<string>("")
  
    const twoWayPattern = async(): Promise<void> =>{
      const filePath = await window.api.openFile()
      setPath(filePath)
    }
    const nav = useNavigate()
  
    return (
      <>
        <p className="tip">
          <code>F12</code> to open the devTool
        </p>
        <Button onClick={oneWayPattern}>
              Send IPC Ping
        </Button>
  
        <Button onClick={twoWayPattern}>
          OPen file
        </Button>
        File path: <strong id="filePath">{path}</strong>
        <Button onClick={()=>nav("/")}>
            back
        </Button>
      </>
    )
}

export default Testing