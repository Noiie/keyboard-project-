import { useState } from 'react'
import './App.css'
import TextArea from './components/TextArea'
import Keyboard from './components/Keyboard'

function App() {
  const keyboardLayouts = {
  english :[
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "=",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", ";", "'", "\\",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "/"
  ],
  hebrew: [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "=",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]",
    "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ",
    "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", ":", ";", "'", "\\",
    "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ", ",", ".", "?", "/"
  ] 
};

  class Character {
    constructor(value, style) {
      this.value = value;
      this.style = style;
    }
  }

  const [text, setText] = useState([]);
  const [index, setIndex] = useState('english');
  const [style, setStyle] = useState(
    {
      color: 'black',
      fontSize: '20px',
      fontFamily: 'arial',
      textTransform: 'lowercase'
    }
  )

  function write(character) {
    setText(prev => [...prev, new Character(character, style)]);
  }

  function swapLanguage() {
    if (index === 'english') {
      setIndex('hebrew')
    } else {
      setIndex('english')
    }
  }

  function clear(){
    setText([])
  }


  function deleteLast() {
    setText(prev => [...prev.slice(0, -1)])
  }

  function space() {
     setText(prev => [...prev, new Character(' ')])     
  }



  return (
    <>
    <h1>{'Our Amazing Keyboard'}</h1>
      <TextArea text={text} />
      <Keyboard 
        style={style}
        setStyle={setStyle}
        keyboardLayouts={keyboardLayouts} 
        layoutIndex={index} 
        swapLayoutIndex={swapLanguage} 
        write={write}
        clear={clear}
        deleteLast={deleteLast}
        space={space} />
    </>
  )
}

export default App
