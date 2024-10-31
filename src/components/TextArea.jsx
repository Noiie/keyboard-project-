/* eslint-disable react/prop-types */
export default function Textarea(props) {
    return (
        <p>{props['text'].map(char => <span style={char.style}>{char.value}</span>)}</p>
    )
}
