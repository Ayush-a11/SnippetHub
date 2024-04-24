import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Components/Store/Store.js'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import SingUp from './Components/Login/SingUp.jsx'


const router= createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<App/>}
  >
    <Route path='' element={<Home/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='SignUp' element={<SingUp/>}/>
  </Route>
))



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
   <RouterProvider router={router}/>
  </Provider>
  // </React.StrictMode>,
)
