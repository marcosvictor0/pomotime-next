import Head from 'next/head';

import { CompletedChallenges } from './Componentes/CompletedChallenges';
import { CountDown } from './Componentes/CountDown';
import { ExperienceBar } from './Componentes/ExperienceBar';
import { Profile } from './Componentes/Profile';
import { ChallengeBox } from './Componentes/ChallengeBox';

import styles from './styles/pages/Home.module.css';



export default function Home() {
  return (
    <div className={ styles.container}>
      <Head>
        <title>Inicio | PomoTime</title>
      </Head>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <CountDown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  )
}
