import "./ScreenChoiceCharacter.css";
import boyImg from "../../imgs/boy.png";
import girlImg from "../../imgs/girl.png";

export default function ScreenChoiceCharacter() {
    return(
        <div className="characters">
            <h1>Выбери персонажа, который тебе нравится</h1>
            <div className="choice">
                <div className="character">
                    <img src={boyImg} alt="Мальчик" className="boy" />
                    <div>
                        <p>Мальчик</p>
                        <button className="button">Выбрать</button>
                    </div>
                </div>
                <div className="character">
                    <img src={girlImg} alt="Девочка" className="girl" />
                    <div>
                        <p>Девочка</p>
                        <button className="button">Выбрать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}