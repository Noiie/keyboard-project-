export default function Keyboard(props) {

    return (
            <>
            
                {
                    props.keyboardLayouts[props.layoutNumber()].map(key => <button onClick={() => props.write(key)}>{key}</button>)   
                }
                <button>🌐</button>
            </>
    )
}