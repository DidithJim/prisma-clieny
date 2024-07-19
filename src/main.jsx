import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import './styles/styles.css'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import BotonUp from './components/BotonUp'
import QuienesSomos from './pages/QuienesSomos'
import Obras from './pages/Obras'
import { UserProvider } from './context/UsuarioContext'
import PanelControl from './pages/PanelControl'
import RutaPrivada from './components/RutaPrivada'
import Login from './pages/Login'
import NuevaObra from './pages/NuevaObra'
import BorrarObra from './pages/BorrarObra'
import EditarObra from './pages/EditarObra'


//Creamos el enturamiento de la página
ReactDOM.createRoot(document.getElementById('root')).render(

  <>

  <Router>

    <UserProvider>


    <Header/>

    <Routes>

      <Route path='/' element={<Inicio/>}/>
      <Route path='/quienes' element={<QuienesSomos/>}/>
      <Route path='/obras' element={<Obras/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/panel' element={<RutaPrivada componente={<PanelControl/>}/>}/>
      <Route path='/nuevaObra' element={<RutaPrivada componente={<NuevaObra/>}/>}/>
      <Route path='/borrarObra/:id' element={<RutaPrivada componente={<BorrarObra/>}/>}/>
      <Route path='/editarObra/:id' element={<RutaPrivada componente={<EditarObra/>}/>}/>



    </Routes>

    <BotonUp/>

    <Footer/>

    </UserProvider>


  </Router>
  
  
  </>

)
