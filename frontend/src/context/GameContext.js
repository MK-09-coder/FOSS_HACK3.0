import {createContext,useState} from "react";


export const GameContext = createContext();

export const GameProvider =({children})=>{
    const [Guuid,setGuuid] = useState();
    

    const values={
        Guuid,setGuuid
    }

    return (
        <GameContext.Provider value={values}>
            {children}
        </GameContext.Provider>
    )}