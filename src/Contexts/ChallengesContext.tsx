import { createContext, useState, ReactNode } from 'react';
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
}

//esse ReactNode, vai aceitar qualquer elemento  filho como children, podendo ser um componente, text, tag html.
interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider( { children }: ChallengesProviderProps ) {
    const [level, setLevel] = useState(1);
    const [currentExperince, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    
    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp() {
    setLevel(level + 1 );
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)
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
        
        }}> 
            { children }
        </ChallengesContext.Provider>
    )
}