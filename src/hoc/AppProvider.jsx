import { createContext, useState } from "react";

export const AppContext = createContext({});


export const AppProvider = ({ children }) => {
    const [character, setCharacter] = useState();
    const [screen, setScreen] = useState("ScreenLoader");
    const [farmName, setFarmName] = useState("Нейроферма");
    const [prevFarmImage, setPrevFarmImage] = useState();
    const [nextFarmImage, setNextFarmImage] = useState();
    const [level, setLevel] = useState("1");
    const [progress, setProgress] = useState(10);
    const [money, setMoney] = useState(10000);

    return(
        <AppContext.Provider 
            value={{ character, setCharacter, screen, setScreen, farmName, setFarmName, level, setLevel, progress, setProgress, money, setMoney, prevFarmImage, setPrevFarmImage, nextFarmImage, setNextFarmImage }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;