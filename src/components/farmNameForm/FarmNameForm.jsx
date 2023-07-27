import { useState, useContext } from "react";
import "./FarmNameForm.css";
import { AppContext } from "../../hoc/AppProvider";

export default function FarmNameForm(props) {
    const { setFarmName } = useContext(AppContext);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        if (e.target.value.length < 25) {
            setInputValue(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        setFarmName(inputValue);
        props.closeForm();
    }

    return(
        <div className="farmnameform">
            <h2>Название фермы</h2>
            <p>Придумай название для нашей будущей фермы</p>
            <input 
                type="text" 
                value={inputValue}
                placeholder="Название" 
                onChange={handleInputChange}
            />
            <button 
                className="button" 
                disabled={inputValue < 1}
                onClick={handleSubmit}
            >Далее</button>
        </div>
    )
}