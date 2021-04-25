import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/marcosvictor0.png" alt="Marcos Victor"/>
            <div>
                <strong>Marcos Victor</strong>

                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    );
}