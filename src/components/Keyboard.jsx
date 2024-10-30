export default function Keyboard(props) {
    return (
            <>
                <button onClick={props.write('a')}>a</button>
                <button onClick={props.write('b')}>b</button>
            </>
    )
}