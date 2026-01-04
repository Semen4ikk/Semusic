import { createRoot } from 'react-dom/client'
import './index.css'
//import { App } from './App.tsx'
import {MainPage} from "./pages/MainPage.tsx";
const rootEL = document.getElementById('root')
const reactRoot = createRoot(rootEL!);
reactRoot.render(<MainPage/>)

