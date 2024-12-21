/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly MAIN_VITE_LOCAL_DB:string
    readonly MAIN_VITE_DIRECT_URL:string
    
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


//variables prefixed with MAIN_VITE_ are exposed to the main process, PRELOAD_VITE_ to preload scripts, RENDERER_VITE_ to renderers and VITE_ to all.