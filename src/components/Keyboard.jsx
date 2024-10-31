export default function Keyboard(props) {
    function swapLanguage() {
        if (props.index === "english") {
            return false;
        } else {
            return true;
        }
    }

    function handleCapsLock(){
        console.log(props.style.textTransform)
        if (props.style.textTransform === 'lowercase') {
            props.setStyle((prev) => ({ ...prev, textTransform: "uppercase" }))
        } else {
            props.setStyle((prev) => ({ ...prev, textTransform: "lowercase" }))
        }
    }

    return (
        <>
<<<<<<< HEAD
            {props.keyboardLayouts[props.layoutIndex].map((key) => (
                <button onClick={() => props.write(key)}>{key}</button>
            ))}
=======
            {props.keyboardLayouts[props.layoutIndex].map((key) => {
                return (
                    <>
                        <button onClick={() => props.write(key)}>{key}</button>
                        {["=", "]", "p", "פ", "\\", "/"].includes(key) && <br />}
                    </>
                );
            })}

>>>>>>> 52398780c052bf901ffc86524d04f8bf21687f7f
            <button onClick={props.swapLayoutIndex}>🌐</button>
            <button onClick={props.clear}>Clear</button>
            {/* <button onClick={props.toUpperCase}>
                Upper case
<<<<<<< HEAD
            </button>
            
            <br/><br/>
            <button onClick={() => props.changeColor('red')}>red</button>
            <button onClick={() => props.changeColor('blue')}>blue</button>
            <button onClick={() => props.changeColor('green')}>green</button>
            <button onClick={() => props.changeColor('black')}>black</button>


            <br/><br/>
            <button onClick={() => props.changeSize('20px')}>20px</button>
            <button onClick={() => props.changeSize('30px')}>30px</button>
            <button onClick={() => props.changeSize('40px')}>40px</button>



=======
            </button> */}
            <button onClick={props.space}>Space</button>
            {/* <button onClick={props.toLowerCase}>
                Lower case
            </button> */}

            <button onClick={props.deleteLast}>Delete</button><br/><br/>

            <button onClick={() => props.setStyle((prev) => ({ ...prev, color: "red" }))}>red</button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, color: "blue" }))}>blue</button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, color: "yellow" }))}>yellow</button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, color: "peachpuff" }))}>peachpuff</button><br/>

            <button onClick={() => props.setStyle((prev) => ({ ...prev, fontSize: "20px" }))}>20px</button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, fontSize: "30px" }))}>30px</button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, fontSize: "40px" }))}>40px</button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, fontSize: "50px" }))}>50px</button><br/>

            <button onClick={() => props.setStyle((prev) => ({ ...prev, fontFamily: "Georgia" }))}>Georgia</button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, fontFamily: "Courier New" }))}>Courier New </button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, fontFamily: "Brush Script MT" }))}>Brush Script MT</button>
            <button onClick={() => props.setStyle((prev) => ({ ...prev, fontFamily: "Garamond" }))}>Garamond</button>

            <button onClick={handleCapsLock}>Caps Lock</button>
>>>>>>> 52398780c052bf901ffc86524d04f8bf21687f7f
        </>
    );
}
