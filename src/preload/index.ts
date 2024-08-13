import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer


// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', {

      ping: ()=>ipcRenderer.send("ping"),
      // Create: (n:number,s:string)=>ipcRenderer.invoke("test-db-insert",n,s),
      // GetData: ()=> ipcRenderer.invoke("test-db-showAll")
      createCollection: (collectionName:string)=>ipcRenderer.invoke("create-collection",collectionName),
      deleteCollection: (deleteId:number)=>ipcRenderer.invoke("delete-collection",deleteId),
      getAllCollections: ()=> ipcRenderer.invoke("get-collections"),
    })
  } catch (error) {
    console.error(error)
  }
} 
else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
