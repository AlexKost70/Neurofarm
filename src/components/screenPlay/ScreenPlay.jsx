import "./ScreenPlay.css";
import { useState, useContext, Fragment, useEffect } from "react";
import TopBar from "../topBar/TopBar";
import { AppContext } from "../../hoc/AppProvider";
import ChoicePath from "../choicePath/ChoicePath";
import levels from "../../json/levels.json";
import Character from "../character/Character";
import CharacterDialog from "../characterDialog/CharacterDialog";
import ShareDialog from "../shareDialog/ShareDialog";
import ChoicePreview from "../choicePreview/ChoicePreview";

export default function ScreenPlay() {
    const { level } = useContext(AppContext);
    const [farmImage, setFarmImage] = useState("farm.png");
    const [showDialog, setShowDialog] = useState(true);
    const [showShareDialog, setShowShareDialog] = useState(false);
    const [showChoice, setShowChoice] = useState(true);
    const [showPreview, setShowPreview] = useState(false);

    const handleImageClick = (e) => {
        if (e.target.classList.contains("view") && !showShareDialog) {
            toggleShareUI();
        }
    }

    const toggleShareUI = () => {
        setShowShareDialog(!showShareDialog);
        setShowDialog(!showDialog);
        setShowChoice(!showChoice);
    }

    function CharacterDialogWrapped(props) {
        return(
            <Fragment>
                <CharacterDialog>{props.children}</CharacterDialog>
                <Character />
            </Fragment>
        )
    }

    const toggleShowPreview = (img) => {
        if (level.length == 5) {
            console.log("конец");
        } else {
            setShowChoice(!showChoice);
            setShowPreview(!showPreview);
        }
    }

    return(
        <div className="play" onClick={handleImageClick}>
            <TopBar />
            <img src={require(`../../imgs/farm/${farmImage}`)} alt="" className="view" />
            { showChoice && <ChoicePath level={levels["level-" + level[0]]} farmImage={farmImage} toggleShowPreview={toggleShowPreview} /> }
            { showShareDialog && <ShareDialog image={farmImage} buttonClickHandler={toggleShareUI} /> }
            { showDialog && <CharacterDialogWrapped>{levels["level-" + level[0]].description}</CharacterDialogWrapped> }
            { showPreview && 
                <Fragment>
                    <ChoicePreview toggleShowPreview={toggleShowPreview} setFarmImage={setFarmImage}  />
                    <CharacterDialogWrapped>{"Вы выбрали"}</CharacterDialogWrapped>
                </Fragment>
            }
        </div>
    )
}