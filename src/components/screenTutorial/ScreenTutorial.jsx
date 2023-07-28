import "./ScreenTutorial.css";
import TopBar from "../topBar/TopBar";
import CharacterDialog from "../characterDialog/CharacterDialog";
import Character from "../character/Character";
import { useState, useEffect, useRef, useContext } from "react";
import FarmNameForm from "../farmNameForm/FarmNameForm";
import levels from "../../json/levels.json";
import ChoicePath from "../choicePath/ChoicePath";
import { AppContext } from "../../hoc/AppProvider";
import farmImg from "../../imgs/farm/farm.png";

export default function ScreenFarm() {
    const { setScreen } = useContext(AppContext);
    const [page, setPage] = useState(1);
    const [blurFarm, setBlurFarm] = useState(false);
    const [blurBar, setBlurBar] = useState("all");
    const [showCharacter, setShowCharacter] = useState(true);
    const tutorialDiv = useRef();

    const dialogues = [
        {
            mainText: "Это миниатюра нашего предприятия.",
            additionalText: "С каждым принятым решением картинка будет меняться. Интересно посмотреть, что у нас получится."
        },
        {
            mainText: "Это наш бюджет.",
            additionalText: false
        },
        {
            mainText: "Это наш прогресс.",
            additionalText: false
        },
        {
            mainText: "Введи название фермы.",
            additionalText: false
        },
        {
            mainText: false,
            additionalText: false
        },
        {
            mainText: "Это варианты выбора.",
            additionalText: "Ты можешь сразу сделать выбор или нажать на иконку информации и узнать подробности одного из вариантов."
        },
        {
            mainText: "Фермой можно поделиться.",
            additionalText: "Кликнув в свободное место на экране ты можешь сохранить картинку или поделиться своим результатом."
        }
    ]

    useEffect(() => {
        switch (page) {
            case 2:
                setBlurFarm(true);
                setBlurBar("showMoney");
                break;
            case 3:
                setBlurBar("showProgress");
                break;
            case 4:
                setBlurBar("showFarmName");
                break;
            case 5:
                setBlurBar("all");
                setShowCharacter(false);
                break;
            case 6:
                setBlurBar("all");
                setShowCharacter(true);
                break;
            case 7:
                setBlurFarm(true);
                break;
            default:
                break;
        }
    }, [page]);

    const skipScreen = () => {
        if (page !== 5 && page !== 7) {
            setPage(page + 1);
        } else if (page === 7) {
            setScreen("ScreenPlay");
        }
    };

    const closeForm = (value) =>{
        setPage(6);
        setBlurFarm(false);
        setBlurBar(false);
    }

    return(
        <div 
            className="tutorial"
            tabIndex={0} 
            onKeyDown={skipScreen} 
            onClick={skipScreen}
            ref={tutorialDiv}
        >
            <TopBar disabled={true} blur={blurBar} />
            <img src={farmImg} alt="" className={blurFarm ? "view blur" : "view"} />
            {
                page !== 5 &&
                    <CharacterDialog additionalText={dialogues[page-1].additionalText}>
                        {dialogues[page-1].mainText}
                    </CharacterDialog>
            }
            {
                page === 5 && <FarmNameForm closeForm={closeForm} />
            }
            {
                page === 6 && <ChoicePath level={levels["level-1"]} disabled={true} />
            }
            {
                page === 7 && <ChoicePath level={levels["level-1"]} disabled={true} blur={true} />
            }
            { showCharacter && <Character /> }
        </div>
    )
}