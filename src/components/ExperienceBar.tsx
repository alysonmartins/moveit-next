import styles from '../styles/components/ExperienceBar.module.css';

import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ExperienceBar(){

  const { currentExperience, experienceToNextLevel, upExp } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;


  return(
  <div>

    <header className={styles.experienceBar}>
      
      <span> 0 EXP </span>

      <div>

        <div style={{ width:`${percentToNextLevel}%`}} />

        <span className={styles.currentExperience}
        style={{ left:`${percentToNextLevel}%` }}>
          {currentExperience} XP
        </span>

      </div>

      <span> {experienceToNextLevel} EXP </span>
      
    </header>    
      
      <button onClick={upExp}>Get XP</button>
    
     
  </div>
  );
}