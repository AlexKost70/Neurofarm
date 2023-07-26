import "./ScreenLoader.css";
import logo from "../../imgs/logo.svg";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../hoc/AppProvider";

export default function ScreenLoader() {
    const { setScreen } = useContext(AppContext);
    const loaderDiv = useRef();

    const skipScreen = (event) => {
        setScreen("ScreenChoiceCharacter");
    };

    useEffect(() => {
        loaderDiv.current.focus();
        const timer = setTimeout(() => setScreen("ScreenChoiceCharacter"), 7000);
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <div 
            className="loader" 
            tabIndex={0} 
            onKeyDown={skipScreen} 
            onClick={skipScreen}
            ref={loaderDiv}
        >
            <img src={logo} alt="" className="logo" />
            <p>Нейроферма Tycoon</p>
        </div>
    )
}