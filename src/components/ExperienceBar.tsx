import styles from '../styles/components/ExperienceBar.module.css';

import { useState } from 'react';

export function ExperienceBar(){

  const [counter, setCounter] = useState(1);
  const [level, setLevel] = useState(1);

  function increment(){
    if (counter >= 100){
      setCounter(counter - 99)
      setLevel(level + 1)
      alert("Parabéns você chegou no nivel "+ level)
    }else{
      setCounter(counter + 1);
    }
    
  }

  return(
  <div>

    <header className={styles.experienceBar}>
      
      <span> 0xp </span>

      <div>

        <div style={{ width:counter + '%'}} />

        <span className={styles.currentExperience}
        style={{ left:counter + '%' }}>
          {counter}0 XP
        </span>

      </div>

      <span> 1000xp </span>
      
    </header>    
      
      <button onClick={increment}>Get XP</button>
    
     
  </div>
  );
}