import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './09-useContext/MainApp'
// import { TodoApp } from './08-useReducer'
// import { Padre } from './07-tarea-memo'
// import './08-useReducer/intro-reducer'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook} from './06-memos'
// import { Memorize} from './06-memos'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { MultipleCustomHooks } from './03-examples'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
