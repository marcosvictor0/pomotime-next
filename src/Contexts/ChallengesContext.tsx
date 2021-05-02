import { createContext, useState, ReactNode } from 'react';

interface ChallengesContextData {
    level: number;
    currentExperince: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
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
    

    function levelUp() {
    setLevel(level + 1 );
    }

    function startNewChallenge() {
        console.log('deu certo');
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
        
        
        }}> 
            { children }
        </ChallengesContext.Provider>
    )
}