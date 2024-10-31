/* eslint-disable react/prop-types */
export default function Keyboard(props) {

    function handleCapsLock(){
        if (props.style.textTransform === 'lowercase') {
            props.setStyle((prev) => ({ ...prev, textTransform: "uppercase" }))
        } else {
            props.setStyle((prev) => ({ ...prev, textTransform: "lowercase" }))
        }
    }

    return (
        <>
            {props.keyboardLayouts[props.layoutIndex].map((key) => {
                return (
                    <>
                        <button onClick={() => props.write(key)}>{key}</button>
                        {["=", "]", "p", "פ", "\\", "/"].includes(key) && <br />}
                    </>
                );
            })}

            <button style={{backgroundColor: "darkred"}} onClick={props.swapLayoutIndex}>🌐</button>
            <button style={{backgroundColor: "lightgrey"}} onClick={props.clear}>Clear</button>
            <button style={{backgroundColor: "lightgrey"}} onClick={props.space}>Space</button>


            <button style={{backgroundColor: "lightgrey"}} onClick={props.deleteLast}>Delete</button><br/><br/>

            <h3>{'colors'}</h3>
            <button style={{color: 'red', backgroundColor: "grey"}} onClick={() => props.setStyle((prev) => ({ ...prev, color: "red" }))}>red</button>
            <button style={{color: 'blue', backgroundColor: "grey"}} onClick={() => props.setStyle((prev) => ({ ...prev, color: "blue" }))}>blue</button>
            <button style={{color: 'yellow', backgroundColor: "grey"}} onClick={() => props.setStyle((prev) => ({ ...prev, color: "yellow" }))}>yellow</button>
            <button style={{color: 'peachpuff', backgroundColor: "grey"}} onClick={() => props.setStyle((prev) => ({ ...prev, color: "peachpuff" }))}>peachpuff</button><br/><br/>

            <h3>{'size'}</h3>
            <button style={{backgroundColor: "grey"}} onClick={() => props.setStyle((prev) => ({ ...prev, fontSize: "20px" }))}>20px</button>
            <button style={{backgroundColor: "grey"}} onClick={() => props.setStyle((prev) => ({ ...prev, fontSize: "30px" }))}>30px</button>
            <button style={{backgroundColor: "grey"}} onClick={() => props.setStyle((prev) => ({ ...prev, fontSize: "40px" }))}>40px</button>
            <button style={{backgroundColor: "grey"}} onClick={() => props.setStyle((prev) => ({ ...prev, fontSize: "50px" }))}>50px</button><br/><br/>

            <h3>{'font'}</h3>
            <button style={{backgroundColor: "lightgrey"}} onClick={() => props.setStyle((prev) => ({ ...prev, fontFamily: "Georgia" }))}>Georgia</button>
            <button style={{backgroundColor: "lightgrey"}} onClick={() => props.setStyle((prev) => ({ ...prev, fontFamily: "Courier New" }))}>Courier New </button>
            <button style={{backgroundColor: "lightgrey"}} onClick={() => props.setStyle((prev) => ({ ...prev, fontFamily: "Brush Script MT" }))}>Brush Script MT</button>
            <button style={{ backgroundColor: "lightgrey"}} onClick={() => props.setStyle((prev) => ({ ...prev, fontFamily: "Garamond" }))}>Garamond</button><br/><br/>

            <h3>{'caps'}</h3>
            <button style={{backgroundColor: "grey"}} onClick={handleCapsLock}>Caps Lock</button>
        </>
    );
}
