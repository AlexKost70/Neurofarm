import "./ScreenPlay.css";
import { useState, useContext, Fragment } from "react";
import TopBar from "../topBar/TopBar";
import { AppContext } from "../../hoc/AppProvider";
import ChoicePath from "../choicePath/ChoicePath";
import levels from "../../json/levels.json";
import Character from "../character/Character";
import CharacterDialog from "../characterDialog/CharacterDialog";
import ShareDialog from "../shareDialog/ShareDialog";

export default function ScreenPlay() {
    const { level, setLevel } = useContext(AppContext);
    const [farmImage, setFarmImage] = useState("farm.png");
    const [showDialog, setShowDialog] = useState(true);
    const [showShareDialog, setShowShareDialog] = useState(false);
    const [showChoice, setShowChoice] = useState(true);

    const handleImageClick = (e) => {
        if (e.target.classList.contains("view") && !showShareDialog) {
            toggleShareUI();
        }
    }

    const toggleShareUI = () => {
        if (showShareDialog) {
            setShowShareDialog(false);
            setShowDialog(true);
            setShowChoice(true);
        } else {
            setShowShareDialog(true);
            setShowDialog(false);
            setShowChoice(false);
        }
    }

    return(
        <div className="play" onClick={handleImageClick}>
            <TopBar />
            <img src={require("../../imgs/" + farmImage)} alt="" className="view" />
            { showChoice && <ChoicePath level={levels["level-" + level]} /> }
            { showShareDialog && <ShareDialog image={farmImage} buttonClickHandler={toggleShareUI} /> }
            {
                showDialog && 
                <Fragment>
                    <CharacterDialog /> 
                    <Character />
                </Fragment>
            }
        </div>
    )
}