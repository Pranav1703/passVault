/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly MAIN_VITE_DB:string
    
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
  