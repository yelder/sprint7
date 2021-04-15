import React from 'react'
import './App.css'
import linea from './assets/linea.json'
import { Button } from './components/styled'
import imagenRomeoJulieta from './assets/images/romeo y julieta.jpg'

function App() {
  return (
    <div className='App'>
      <div className='posts'>
        <img src={imagenRomeoJulieta} alt='Imagen Romeo y Julieta' />
        <div className='botones'>
          <Button backgroundColor='red'>Anterior</Button>
          <Button backgroundColor='red'>Siguiente</Button>
        </div>

        {linea.map((post) => {
          return (
            <>
              <p>{post}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}
export default App
