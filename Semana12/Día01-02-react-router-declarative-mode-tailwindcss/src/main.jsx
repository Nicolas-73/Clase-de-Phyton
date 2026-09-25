import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'

import HomePage from './pages/HomePage.jsx'
import NicolásTicse from './pages/NicolásTicse.jsx'
import ProductsPage from './pages/ProductsPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/prueba' element={<App />} />
      <Route path='/acerca-de-mí' element={<NicolásTicse />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:id' element={<ProductDetailPage />} />

      {/* TODO: Crear un ruta llamada "/acerca-de-mi" con sus nombre y apellidos */}

    </Routes>
  </BrowserRouter>
)