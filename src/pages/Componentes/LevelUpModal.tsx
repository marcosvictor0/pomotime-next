import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    return  (
        <div className={styles.container}>

        <div 
            className={styles.container}>
                <header>
                    2
                </header>
                <strong>
                    Parábens!!
                </strong>
                <p>
                    Você Alcançou um novo level!.
                </p>

                <button 
                type='button'
            
                >
                    <img src="/icons/close.svg" alt="fechar modal" />
                </button>
        </div>

        </div>
    )
}