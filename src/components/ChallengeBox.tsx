import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';
import { CountDownContext } from '../Contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountDownContext);

    function handleChallengeSucess(){
        completeChallenge();
        resetCountDown();
    }
    
    function handleChallengeFailed(){
        resetChallenge();
        resetCountDown();
    }

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
                        onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucessButton}
                        onClick={handleChallengeSucess}
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