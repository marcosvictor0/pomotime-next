import { useContext } from 'react';
import { ChallengesContext } from '../../Contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge } = useContext(ChallengesContext);
    
    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe { activeChallenge.amount  } xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucessButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>

            ) : 
            ( <div className={styles.challengeNotActive}>
                <strong>
                        Inicie um ciclo para 
                        receber desafios a 
                        serem completados.
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP"/>
                    Avance de Level completando desafios.
                </p>
            </div>)}
        </div>
    )
}