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
            {props.keyboardLayouts[props.layoutIndex].map((key) => {
                return <>
                    <button onClick={() => props.write(key)}>{key}</button>
                    {['=', ']', 'p', 'פ', '\\', '/'].includes(key) && <br />}
                </>
            })}

            <button onClick={props.swapLayoutIndex}>🌐</button>
            <button onClick={props.clear}>Clear</button>
            <button onClick={props.toUpperCase}>
                Upper case
            </button>
            <button onClick={props.space}>Space</button>
            <button onClick={props.toLowerCase}>
                Lower case
            </button>
            
            <button onClick={props.deleteLast}>Delete</button>
        </>
    );
}


