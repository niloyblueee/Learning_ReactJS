import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ColorPickerApp from './ColorPickerApp/ColorPickerApp.jsx'
import App from './App.jsx'
import ToDoApp from './To-Do List App/ToDoApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<ColorPickerApp />*/}
    <ToDoApp />

  </StrictMode>,
)
