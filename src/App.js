import './App.css';
import logo from './imgs/logo.svg'

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='logo'
          alt='logo de react'  
        />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
