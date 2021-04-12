import React,{ Component } from'react';
import './App.css';
import linea from './assets/linea.json'
import {Cuadrado} from './components/styled'


function App() {

return(
<div className="App">
<div className="posts">
{
  linea.map(post =>{
    return(
      <>
      <p>{post}</p>
      </>
    )
  })
}
</div>
</div>
); 
}
  export default App;
  