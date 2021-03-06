import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

interface CountDownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountDownProviderProps{
    children: ReactNode;
}


export const CountDownContext = createContext({} as CountDownContextData);

let countdownTimeOut: NodeJS.Timeout;

export function CountDownProvider({children}: CountDownProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState( 25 * 60 );
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        setIsActive(true);
    }


    function resetCountDown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setHasFinished(false);
        setTime( 25 * 60 );
    }

    useEffect(() => {
        if (isActive && time > 0 ){
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])
    //essa função faz o contador la no site.

    return(
        <CountDownContext.Provider 
        value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown,
        }}>
            {children}
        </CountDownContext.Provider>
    )
}

/* 

ESTRUTURA BÁSICA DE UM CONTEXTO NO REACT

import { createContext, ReactNode } from "react";

interface CountDownContextData{
    
}

interface CountDownProviderProps{
    children: ReactNode;
}

const CountDownContext = createContext({} as CountDownContextData);

export function CountDownProvider({children}: CountDownProviderProps){
    return(
        <CountDownContext.Provider value={{}}>
            {children}
        </CountDownContext.Provider>
    )
}*/
