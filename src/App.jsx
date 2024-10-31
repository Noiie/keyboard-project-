import { useState } from 'react'
import './App.css'
import TextArea from './components/TextArea'
import Keyboard from './components/Keyboard'

function App() {
  const keyboardLayouts = {
    english: [
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
      "a", "s", "d", "f", "g", "h", "j", "k", "l",
      "z", "x", "c", "v", "b", "n", "m",
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
      "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
      "-", "=", "[", "]", "\\", ";", "'", ",", ".", "/"
    ],
    hebrew: [
      "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י",
      "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר",
      "ש", "ת", "װ", "ױ", "׳", "״",
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
      "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
      "-", "=", "[", "]", "{", "}", "\\", ";", "'", ":", ",", ".", "/"
    ]
  };


  const [text, setText] = useState("");
  const [index, setIndex] = useState('english');
  const [textColor, setTextColor] = useState('black');
  const [textSize, setTextSize] = useState('14px');


  function write(character) {
    setText(prev => prev + character);
  }

  function swapLanguage() {
    if (index === 'english') {
      setIndex('hebrew')
    } else {
      setIndex('english')
    }
  }

  function clear() {
    setText('')
  }

  function textToUpperCase() {
    setText(prev => prev.toUpperCase())
  }

  function textToLowerCase() {
    setText(prev => prev.toLowerCase())
  }

  const changeColor = (color) => setTextColor(color);
  const changeSize = (size) => setTextSize(size);

  return (
    <>
      <TextArea text={text} />
      <Keyboard
        keyboardLayouts={keyboardLayouts}
        layoutIndex={index}
        swapLayoutIndex={swapLanguage}
        write={write}
        clear={clear}
        toUpperCase={textToUpperCase}
        changeColor={changeColor}
        changeSize={changeSize}
      />

    </>
  )
}

export default App

//   function getLayout(){
//     if (layout === keyboardLayouts.length - 1) {
//         setLayout(0)
//     } else {
//         setLayout(prev => prev + 1)
//     }

//     return layout
// }