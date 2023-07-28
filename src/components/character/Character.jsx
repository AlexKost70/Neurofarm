import "./Character.css";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppProvider";
import boyImg from "../../imgs/boy.png";
import girlImg from "../../imgs/girl.png";

export default function Character() {
    const { character } = useContext(AppContext);

    const img = character === "boy" ? boyImg : girlImg;

    return(
        <div className="character-wrapper">
            <img src={img} alt="" className={"robot " + character} />
        </div>
    )
}