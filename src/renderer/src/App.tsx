import { useState } from "react"


function App(){
  
  const oneWayPattern = (): void => window.api.ping()

  const [path,setPath] = useState<string>("")

  const twoWayPattern = async():Promise<void> =>{
    const filePath = await window.api.openFile()
    setPath(filePath)
  }

  return (
    <>
      <p className="tip">
        <code>F12</code> to open the devTool
      </p>
      <button onClick={oneWayPattern}>
            Send IPC Ping
      </button>

      <button onClick={twoWayPattern}>
        OPen file
      </button>
      File path: <strong id="filePath">{path}</strong>
    </>
  )
}

export default App
