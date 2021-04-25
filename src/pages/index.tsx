import { CompletedChallenges } from './Componentes/CompletedChallenges';
import Head from 'next/head';
import { ExperienceBar } from './Componentes/ExperienceBar';
import { Profile } from './Componentes/Profile';
import styles from './styles/pages/Home.module.css';



export default function Home() {
  return (
    <div className={ styles.container}>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
