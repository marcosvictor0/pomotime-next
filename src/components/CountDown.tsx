import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';



export function CountDown() {
   const {
        minutes, 
        seconds, 
        hasFinished, 
        startCountDown, 
        isActive, 
        resetCountDown 
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
    <div>
        <div className={ styles.countDownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        { hasFinished ? (
            <button
            disabled
            className={styles.countDownButton}
            >
               Ciclo encerrado
            </button> 
        ) : ( 
    <>
        { isActive ? 
        (
            <button 
            type="button" 
            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
            onClick={resetCountDown}
            >
               Abandonar ciclo
            </button> 
        )
            :
        ( 
            <button 
                type="button" 
                className={styles.countDownButton}
                onClick={startCountDown}
            >
            Iniciar um ciclo
            </button>
        )
    }
    </>
            ) //isso faz com qu eele tenha apenas um IF, a outra forma seria que no lugar do '?', colocaria um && e tirasse o : null.
    }
    </div>
    );
}