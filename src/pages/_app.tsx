import "./styles/global.css";

import { ChallengesProvider } from '../Contexts/ChallengesContext';


function MyApp({ Component, pageProps }) {
  return (
    //Quando a gente cria um componente, e esse componente recebe conteúdo dentro dele, isso se chama children, então é preciso buscar la no ChallengesContext a propriedades do componente chamada children
      <Component {...pageProps} />
  )
}

export default MyApp
