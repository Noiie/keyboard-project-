
export default function Textarea(props) {
    console.log(props.text)
    return (
        <div>{props['text'].map(char => <span style={char.style}>{char.value}</span>)}</div>
    )
}
