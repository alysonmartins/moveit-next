import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/CountDown.module.css';




export function CountDown(){

	const { 
		minutes,
		seconds, hasFinished, isActive, startCoutnDown, resetCountdown } = useContext(CountdownContext);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');




	return (
		<div>
		<div className={styles.countDownContainer}>
			<div>
				<span>{minuteLeft}</span>
				<span>{minuteRight}</span>
			</div>
			<span>:</span>
			<div>
				<span>{secondsLeft}</span>
				<span>{secondsRight}</span>
			</div>
		</div>

		{hasFinished ? (
			<button 
			disabled
			className={styles.countdownButton}
			>
				Ciclo encerrado
			</button>
	
		) : (
			<>
				{isActive ? (
				<button 
				type="button" 
				className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
				onClick={resetCountdown}>
					Abandonar Ciclo
				</button>
		
		
		):(
				<button 
				type="button" 
				className={styles.countdownButton}
				onClick={startCoutnDown}>
					Iniciar um Ciclo
				</button>
		)}

		</>
		)}

		</div>
	)
}