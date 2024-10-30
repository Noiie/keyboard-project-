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
        </>
    );
}


