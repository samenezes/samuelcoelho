import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cabecalho from './components/cabecalho'
import Conteudo from './components/conteudo'
import Rodape from './components/rodape'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </>
  )
}

export default App
