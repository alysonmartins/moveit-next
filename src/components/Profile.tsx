import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
  <div className={styles.profileContainer}>
    <img src="https://github.com/alysonmartins.png" alt="Perfil :)"/>
    <div>
      <strong>Alyson Martins</strong>
      <p>
        <img src="icons/level.svg" alt="level"/>
        Level 1
      </p>
    </div>
  </div>

  )
} 