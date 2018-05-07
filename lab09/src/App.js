import React, { Component } from 'react';
import Contador from './components/Contador/Contador';
import Calculadora from './components/Calculadora/Calculadora';

class App extends Component {
  render() {
    return (
      <div>
        <Calculadora />
      </div>
    );
  }
}

export default App;
