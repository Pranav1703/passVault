import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    api: any
  }
}

export type Credential = {
  email: string
  password: string
  collectionId: number
}