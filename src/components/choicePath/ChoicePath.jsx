import SelectWindow from "../selectWindow/SelectWindow";
import "./ChoicePath.css";

export default function ChoicePath(props) {
    let disabled = false;
    if (props.disabled) {
        disabled = true;
    }
    const level = props.level;
    return (
        <div className={props.blur ? "path blur" : "path"}>
            <div className="wrapper">
                <SelectWindow toggleShowPreview={props.toggleShowPreview} farmImage={props.farmImage} choice={level["choice-1"]} disabled={disabled} />
                <SelectWindow toggleShowPreview={props.toggleShowPreview} farmImage={props.farmImage} choice={level["choice-2"]} disabled={disabled}  />
            </div>
        </div>
    )
}