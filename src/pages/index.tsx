import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from './components/CompletedChallenges';
import { CountDown } from './components/CountDown';
import { ExperienceBar } from './components/ExperienceBar';
import { Profile } from './components/Profile';
import { ChallengeBox } from './components/ChallengeBox';

import styles from './styles/pages/Home.module.css';
import { CountDownProvider } from '../Contexts/CountDownContext';
import { ChallengesProvider } from '../Contexts/ChallengesContext';

interface HomeProps{
  level: number;
  currentExperince:number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props);

  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperince={props.currentExperince} 
    challengesCompleted={props.challengesCompleted}>
    <div className={ styles.container}>
      <Head>
        <title>Inicio | PomoTime</title>
      </Head>
      <ExperienceBar/>
      <CountDownProvider>
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
      </CountDownProvider>
    </div>
    </ChallengesProvider>
  )
}

//quando os buscadores de buscar vim no meu site, o site primeiro vai rodar essa parte do GetServerSide pra dps rodar a parte do front, por isso é utilizado aqui e não la em cima por causa dos buscadores.
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //const user = {
   // level: 1,
   // currentExperince: 50,
   // challengesCompleted: 1,
 // }
  const { level, currentExperince, challengesCompleted } = ctx.req.cookies;

//tudo que eu colocar aqui, vai rodar no servidor node e não no browser.
  //console.log(user)

  return {
    props: {
      level: Number(level),
      currentExperince: Number(currentExperince),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
// quando eu declaro essa função dentro de uma página do Next eu consigo manipular quais dados serão repassados da camada do NextJs
//para a camada do front-end
//Back-end(ruby)
//Next-Js(Node)
//Front-end(React)