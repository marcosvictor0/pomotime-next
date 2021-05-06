import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from "js-cookie";
//biblioteca js pura, ele so da uma api mais amigavel para eu poder buscar os dados, escrever.
import challenges from '../../Challenges.json';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface ChallengesContextData {
    level: number;
    currentExperince: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
}

//esse ReactNode, vai aceitar qualquer elemento  filho como children, podendo ser um componente, text, tag html.
interface ChallengesProviderProps{
    children: ReactNode;
    level: number;
    currentExperince:number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider( { children, ...rest }: ChallengesProviderProps ) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperince, setCurrentExperience] = useState(rest.currentExperince ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4 , 2);

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperince', String(currentExperince));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level,currentExperince,challengesCompleted])
    //ele vai disparar uma função sempre que algo dentro do array mudar.

    function levelUp() {
    setLevel(level + 1 );
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission === "granted") {
            new Notification('Novo Desafio 🎆', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }
//(!activeChallenge) { se eu n tiver com o challenge ativo}
    function completeChallenge() {
        if (!activeChallenge) {
            return; //retorno vazio
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperince + amount;

        if ( finalExperience >= experienceToNextLevel ) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1 );
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    //quanto se tem 2 {} é pq vai ser enviado um objeto.
    //esse provider, faz com que minha app receba informações de todos os componentes.
    return (
        <ChallengesContext.Provider 
        value={{ 
        level,
        currentExperince, 
        challengesCompleted, 
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        
        }}> 
            { children }
        </ChallengesContext.Provider>
    )
}