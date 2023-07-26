import "./ScreenChoiceCharacter.css";
import boyImg from "../../imgs/boy.png";
import girlImg from "../../imgs/girl.png";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppProvider";

export default function ScreenChoiceCharacter() {
    const { setScreen, setCharacter } = useContext(AppContext);
    return(
        <div className="characters">
            <h1>Выбери персонажа, который тебе нравится</h1>
            <div className="choice">
                <div className="character">
                    <img src={boyImg} alt="Мальчик" className="boy" />
                    <div>
                        <p>Мальчик</p>
                        <button onClick={() => { setCharacter("boy"); setScreen("ScreenHello") }} className="button">Выбрать</button>
                    </div>
                </div>
                <div className="character">
                    <img src={girlImg} alt="Девочка" className="girl" />
                    <div>
                        <p>Девочка</p>
                        <button onClick={() => {setCharacter("girl"); setScreen("ScreenHello") }} className="button">Выбрать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}