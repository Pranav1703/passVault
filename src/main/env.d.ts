/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly MAIN_VITE_KEY:string
    
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
  