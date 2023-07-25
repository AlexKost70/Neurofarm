import "./ScreenLoader.css";
import logo from "../../imgs/logo.svg";

export default function ScreenLoader() {
    return(
        <div className="loader">
            <img src={logo} alt="" className="logo" />
            <p>Нейроферма Tycoon</p>
        </div>
    )
}