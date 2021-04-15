import React, { useState } from 'react'
import './App.css'
import linea from './assets/linea.json' //Se importa los textos
import { Button } from './components/styled' //Se importa el componente que se creo con StyledComponents
import imagenRomeoJulieta from './assets/images/romeo y julieta.jpg' //Se importa la imagen

function App() {
  //Se buscar mostrar una frase en la pantalla
  const [frase, setFrase] = useState(0)

  //Función anterior
  const anterior = () => {
    if (frase !== 0) {
      setFrase(frase - 1)
    }
  }

  //Funcion siguiente
  const siguiente = () => {
    if (frase !== linea.length - 1) {
      setFrase(frase + 1)
    }
  }

  return (
    <div className='App'>
      <div className='posts'>
        <img src={imagenRomeoJulieta} alt='Imagen Romeo y Julieta' />
        <div className='botones'>
          <Button onClick={anterior} backgroundColor='red'>
            Anterior
          </Button>
          <Button onClick={siguiente} backgroundColor='red'>
            Siguiente
          </Button>
        </div>
        return (
        <>
          <p>{linea[frase]}</p>
        </>
        )
      </div>
    </div>
  )
}
export default App
