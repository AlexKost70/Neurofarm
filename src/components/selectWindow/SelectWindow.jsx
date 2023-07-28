import infoImg from "../../imgs/info.svg";
import moneyImg from "../../imgs/money-green.svg"
import "./SelectWindow.css";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppProvider";

export default function SelectWindow(props) {
    const { setPrevFarmImage, setNextFarmImage, level, setLevel } = useContext(AppContext);
    const { farm, num, img, info, price, title } = props.choice;
    let buttonStatus = "";
    
    if (props.disabled) {
        buttonStatus = " disabled";
    }

    const handleChooseClick = () => {
        if (!props.disabled) {
            props.toggleShowPreview();
            setPrevFarmImage(props.farmImage);
            if (props.farmImage === farm.png) {
                setNextFarmImage(`farm-${num}.png`);
            } else {
                setNextFarmImage(`farm-${level}.png`);
            }
            console.log(level);
            setLevel(level + "-" + num);
            console.log(level);
        }
    }

    const handleInfoClick = () => {
        if (!props.disabled) {
            console.log("clicked");
        }
    }

    return(
        <div className="selectwindow">
            <button className={"info" + buttonStatus} onClick={handleInfoClick}><img src={infoImg} alt="Информация" /></button>
            <img src={require("./../../imgs/levels/" + img)} alt={title} className="choice-image" />
            <div className="footer">
                <div className="left">
                    <p className="choice-title">{title}</p>
                    <p className="choice-price"><img src={moneyImg} alt="Деньги" /> {price}</p>
                </div>
                <button className={"button" + buttonStatus} onClick={handleChooseClick}>Выбрать</button>
            </div>
        </div>
    )
}