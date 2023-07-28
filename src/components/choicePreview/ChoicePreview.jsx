
import { useEffect, useContext } from "react";
import "./ChoicePreview.css";
import { AppContext } from "../../hoc/AppProvider";

export default function ChoicePreview(props) {
    const { prevFarmImage, nextFarmImage, level, setLevel } = useContext(AppContext);

    function increaseFirstNumber(str) {
        // Ищем первое число в строке с помощью регулярного выражения
        let match = str.match(/\d+/);
        // Если нашли, то преобразуем его в число и увеличиваем на 1
        if (match) {
            let num = Number(match[0]);
            num++;
          // Заменяем первое число в строке на новое значение
            str = str.replace(match[0], num);
        }
        // Возвращаем измененную строку
        return str;
    }

    const handleNextClick = () => {
        props.toggleShowPreview();
        setLevel(increaseFirstNumber(level));
    }

    const handlePrevClick = () => {
        props.toggleShowPreview();
        props.setFarmImage(prevFarmImage);
    }

    useEffect(() => {
        props.setFarmImage(nextFarmImage);
    }, []);

    return(
        <div className="preview-wrapper">
            <div className="preview">
                <button className="button" onClick={handlePrevClick}>Назад</button>
                <button className="button" onClick={handleNextClick}>Далее</button>
            </div>
        </div>
    )
}