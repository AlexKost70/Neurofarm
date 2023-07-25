import infoImg from "../../imgs/info.svg";
import moneyImg from "../../imgs/money.svg"
import "./SelectWindow.css";

export default function SelectWindow({ type, title, price,  }) {
    return(
        type === "small" ? 
            <div className="window-small">
                <img src="" alt={title} className="window-img" />
                <div className="window-body">
                    <div className="body-header">
                        <div>
                            <p className="title">{title}</p>
                            <p className="price"><img src={moneyImg} alt="Цена" />{price}</p>
                        </div>
                        <a href="nolink" alt="Информация"><img src={infoImg} alt="Информация" /></a>
                    </div>
                    <button className="button">Выбрать</button>
                </div>
            </div> :
            <div className="window-big">
                <div className="window-img">
                    <a href="nolink" alt="Информация"><img src={infoImg} alt="Информация" /></a>
                </div>
                <div className="window-body">
                    <div className="body-header">
                        <p className="title">{title}</p>
                        <p className="price"><img src={moneyImg} alt="Цена" />{price}</p>
                    </div>
                    <button className="button">Выбрать</button>
                </div>
            </div>
    )
}