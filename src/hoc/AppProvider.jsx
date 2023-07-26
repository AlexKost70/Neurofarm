import { createContext, useState } from "react";

export const AppContext = createContext({});


export const AppProvider = ({ children }) => {
    const [character, setCharacter] = useState();
    const [screen, setScreen] = useState("ScreenLoader");

    return(
        <AppContext.Provider value={{ character, setCharacter, screen, setScreen }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;