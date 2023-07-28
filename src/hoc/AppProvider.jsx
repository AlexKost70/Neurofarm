import { createContext, useState } from "react";

export const AppContext = createContext({});


export const AppProvider = ({ children }) => {
    const [character, setCharacter] = useState();
    const [screen, setScreen] = useState("ScreenLoader");
    const [farmName, setFarmName] = useState("Нейроферма");
    const [level, setLevel] = useState(1);
    const [progress, setProgress] = useState(0);
    const [money, setMoney] = useState(10000);

    return(
        <AppContext.Provider 
            value={{ character, setCharacter, screen, setScreen, farmName, setFarmName, level, setLevel, progress, setProgress, money, setMoney }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;