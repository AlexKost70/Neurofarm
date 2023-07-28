
import { useEffect, useContext } from "react";
import "./ChoicePreview.css";
import { AppContext } from "../../hoc/AppProvider";

export default function ChoicePreview(props) {
    const { prevFarmImage, nextFarmImage, level, setLevel, setChoice, choice } = useContext(AppContext);
    const handleNextClick = () => {
        props.toggleShowPreview();
        setLevel(level + 1);
    }

    const handlePrevClick = () => {
        setChoice(choice.slice(0, -1));
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