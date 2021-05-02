import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});
//esse ReactNode, vai aceitar qualquer elemento 
interface ChallengesProviderProps{
    children: ReactNode;
}

export function ChallengesProvider( {children} ) {
    const [Level, setLevel] = useState(1);

    function levelUp() {
    setLevel(Level + 1 );
    }
    //quanto se tem 2 {} é pq vai ser enviado um objeto.
    //esse provider, faz com que minha app receba informações de todos os componentes.
    return (
        <ChallengesContext.Provider value={{ Level, levelUp }}> 
            { children }
        </ChallengesContext.Provider>
    )
}