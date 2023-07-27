import "./TopBar.css";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppProvider";
import progressIcon from "../../imgs/progress.svg";
import moneyIcon from "../../imgs/money.svg";

export default function TopBar(props) {
    const { farmName, progress, money } = useContext(AppContext);
    let blurProgress, blurFarmName, blurMoney = false;
    let buttonStatus = "";
    
    if (props.disabled) {
        buttonStatus = "disabled";
    }

    if (props.blur) {
        switch(props.blur) {
            case "all":
                blurProgress = true;
                blurFarmName = true;
                blurMoney = true;
                break;
            case "showProgress":
                blurFarmName = true;
                blurMoney = true;
                break;
            case "showFarmName":
                blurProgress = true;
                blurMoney = true;
                break;
            case "showMoney":
                blurProgress = true;
                blurFarmName = true;
                break;
            default:
                break;
        }
    }

    const handleProgressClick = () => {
        if (!props.disabled) {
            console.log("clicked");
        }
    }

    const handleMoneyClick = () => {
        if (!props.disabled) {
            console.log("clicked");
        }
    }

    const progressButtonClassName = "button progress" + " " + buttonStatus + (blurProgress ? " blur" : "");
    const farmNameClassName = blurFarmName ? "blur" : "";
    const moneyButtonClassName = "button money" + " " + buttonStatus + (blurMoney ? " blur" : "");

    return(
        <div className="bar">
            <div className="wrapper">
                <button className={progressButtonClassName} onClick={handleProgressClick}><img src={progressIcon} alt="" />{progress} %</button>
                <h1 className={farmNameClassName}>{farmName}</h1>
                <button className={moneyButtonClassName} onClick={handleMoneyClick}><img src={moneyIcon} alt="" />{money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</button>
            </div>
        </div>
    )
}