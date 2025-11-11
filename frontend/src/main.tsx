// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
const rootEL = document.getElementById('root')
const reactRoot = createRoot(rootEL!);
reactRoot.render(<App/>)

