import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountdDown";

import Head from 'next/head'; 

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>
        Inicio | MoveIt [Alyson A. Martins]
        </title>
      </Head>


      <ExperienceBar  />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>
          Olá Boa Noite a Todos, me chamo Alyson A. Martins, tenho 27 anos, vivo em Madri, na  Espanha. <br/><br/>
Sou dono de uma pequena empresa de desenvolvimento voltado para WEB / Mobile.<br/><br/>
Atualmente estou estudando algumas das principais linguagens de programação como ReactJS e React Native, Next.js, 
antes ja trabalhei com PHP, C#, C++, MySQL, MSSSQL tanto no desenvolvimento pessoal, como na criação de pequenos sistemas ou jogos.. <br/>

<br/><br/>
Aqui deixo algumas redes.. porem ainda estou postando poco a poco meus projetos e coisas que aprendi com o tempo/estudo.<br/><br/>
LinkedIn: https://app.rocketseat.com.br/me/alyson-a-martins-1566932677rra/<br/>
Github: https://github.com/alysonmartins<br/>

<br/><br/> #rumoaoproximonivel

      </div>
      </section>

    </div>
  )
}
