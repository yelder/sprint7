import React,{ Component } from'react';
import './App.css';
import linea from './assets/linea.json'


class App extends Component {
  state = {
   linea: linea
  }
  
     render () {
    return <div>
      { this.state.linea.map (e=> <p>{e}</p>)}
  
    </div>  
   }
  
  }

  export default App;
  