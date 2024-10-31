export default function Keyboard(props) {
    function swapLanguage() {
        if (props.index === "english") {
            return false;
        } else {
            return true;
        }
    }
    
    return (
        <>
            {props.keyboardLayouts[props.layoutIndex].map((key) => (
                <button onClick={() => props.write(key)}>{key}</button>
            ))}
            <button onClick={props.swapLayoutIndex}>🌐</button>
            <button onClick={props.clear}>Clear</button>
            <button onClick={props.toUpperCase}>
                Upper case
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



        </>
    );
}


