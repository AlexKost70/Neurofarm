import "./ShareDialog.css";
import linkImg from "../../imgs/info.svg";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppProvider";


export default function ShareDialog(props) {
    const { farmName } = useContext(AppContext);
    const fileName = `${farmName} Neurofarm ${new Date()}`;
    
    return(
        <div className="share-wrapper">
            <div className="share">
                <div className="links">
                    <a href={require("../../imgs/farm/" + props.image)} download={fileName}>Сохранить фото<img src={linkImg} alt="Ссылка" /></a>
                    <a href="#">Поделиться<img src={linkImg} alt="Ссылка" /></a>
                </div>
                <button className="button" onClick={props.buttonClickHandler}>Далее</button>
            </div>
        </div>
    )
}