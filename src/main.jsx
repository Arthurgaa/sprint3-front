import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from  './routes/Login.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Pergunta from './routes/Pergunta.jsx'
import Pilotos from './routes/Pilotos.jsx'
import Sobre from './routes/Sobre.jsx'


// criando a função
const router =createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elementos Filho
    children:[
      {path:'/',element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/cadastro',element:<Cadastro/>},
      {path:'/pergunta',element:<Pergunta/>},
      {path:'/pilotos',element:<Pilotos/>},
      {path:'/sobre',element:<Sobre/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)