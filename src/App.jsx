import {useState} from "react";
import './App.css'
import {Button} from './components/Button'

function App() {
  const [valor, setValor] = useState(0)

  const sumar = () => {
    setValor(valor+1);
  }

  const resta = () => {
    setValor(valor-1);
  }

  return (
    <>    
      <Button content="Aumentar" color="green" accion={sumar}/>
      <br />
      {valor}
      <br />
      <Button content="Disminuir" accion={resta}/>      
    </>
  )
}

export default App
