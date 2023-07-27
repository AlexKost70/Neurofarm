import SelectWindow from "../selectWindow/SelectWindow";
import "./ChoicePath.css";

export default function ChoicePath(props) {
    const level = props.level;
    return (
        <div className={props.blur ? "path blur" : "path"}>
            <div className="wrapper">
                <SelectWindow choice={level["choice-1"]} disabled={props.disabled} />
                <SelectWindow choice={level["choice-2"]} disabled={props.disabled}  />
            </div>
        </div>
    )
}