import { useState } from 'react'
import './App.css'
import TextArea from './components/TextArea'
import Keyboard from './components/Keyboard'

function App() {
  const keyboard = ["a", "b"];
  console.log(keyboard)
  const [text, setText] = useState("");

  function write(character) {
    setText(prev => prev + character);
  }

  return (
    <>
      <TextArea text={text} />
      <Keyboard write={write} />
    </>
  )
}

export default App
