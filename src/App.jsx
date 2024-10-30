import { useState } from 'react'
import './App.css'
import TextArea from './components/TextArea'
import Keyboard from './components/Keyboard'

function App() {
  const keyboardLayouts = [
  [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "z", "x", "c", "v", "b", "n", "m",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "-", "=", "[", "]", "\\", ";", "'", ",", ".", "/"
  ],
  [
    "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י",
    "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר",
    "ש", "ת", "װ", "ױ", "׳", "״",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "-", "=", "[", "]", "{", "}", "\\", ";", "'", ":", ",", ".", "/"
  ] 
];


  const [text, setText] = useState("");

  function write(character) {
    setText(prev => prev + character);
  }

  const [layout, setLayout] = useState(0);

  function getLayout(){
    if (layout === keyboardLayouts.length - 1) {
        setLayout(0)
    } else {
        setLayout(prev => prev + 1)
    }

    return layout
}

  return (
    <>
      <TextArea text={text} />
      <Keyboard keyboardLayouts={keyboardLayouts} layoutNumber={getLayout} write={write} />
    </>
  )
}

export default App
