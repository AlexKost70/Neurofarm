import { useContext, useEffect, useState } from "react";
import "./ScreenHello.css";
import { AppContext } from "../../hoc/AppProvider";
import boyImg from "../../imgs/boy.png";
import girlImg from "../../imgs/girl.png";

export default function ScreenHello() {
    const { character } = useContext(AppContext);
    const [page, setPage] = useState(1);

    const img = character === "boy" ? boyImg : girlImg;
    const name = character === "boy" ? "Агрон" : "Техна";

    return(
        <div className="hello">
            { page === 1 && 
                <div className="window">
                    <p className="text-1">Привет!<br /><span>Меня зовут {name}!</span></p>
                    <p className="text-2">
                        Меня создали специалисты РСХБ, чтобы сделать предприятия агрокомплекса эффективнее.<br />В меня загружена вся информация о новых технологиях и устройстве таких предприятий.<br />Теперь ты можешь обучиться созданию предприятия агрокомплекса.
                    </p>
                    <p className="text-3">С твоей помощью мы сможем создать предприятие №1 в стране.</p>
                    <button onClick={() => setPage(2)} className="button">Далее</button>
                    <img src={img} alt="Персонаж" className="robot" />
                </div> 
            }
            { page === 2 && 
                <div className="window">
                    <p className="text-1">Поздравляю, у нас первый заказ!</p>
                    <p className="text-2">
                        Нужно улучшить ферму.<br />Это сельскохозяйственный агрокомплекс.<br />Расположен в центральном регионе России.
                    </p>
                    <p className="text-3">За работу!</p>
                    <button className="button">Далее</button>
                    <img src={img} alt="Персонаж" className="robot" />
                </div> 
            }
        </div>
    )
}