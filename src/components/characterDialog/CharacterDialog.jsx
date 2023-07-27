import "./CharacterDialog.css";

export default function CharacterDialog(props) {
    let showAdditionalText = true;
    if (!props.additionalText) {
        showAdditionalText = false;
    }

    return(
        <div className="dialog">
            <h2>{props.children}</h2>
            <p className={!showAdditionalText ? "hidden" : null}>{props.additionalText}</p>
        </div>
    )
}