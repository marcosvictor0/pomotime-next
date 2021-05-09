import { useContext } from 'react';
import { ChallengesContext } from '../../Contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const {level, closeLevelUpModal} = useContext(ChallengesContext)

    return  (
        <div className={styles.overlay}>

        <div className={styles.container}>
                <header>
                    {level}
                </header>
                <strong>
                    Parábens!!
                </strong>
                <p>
                    Você Alcançou um novo level!.
                </p>

                <button type='button' onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="fechar modal" />
                </button>
        </div>
        </div>
    )
}