import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/marcosvictor0.png" alt="Marcos Victor"/>
            <div>
                <strong>Marcos Victor</strong>

                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}