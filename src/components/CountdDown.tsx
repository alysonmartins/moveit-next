import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountdDown.module.css';


let countdownTimeout: NodeJS.Timeout;


export function CountDown(){

	const { startNewChallenges } = useContext(ChallengesContext);

	const [time, setTime] = useState(2);
	const [isActive, setisActive] = useState(false);
	const [hasFinished, sethasFinished] = useState(false);


	const minutes = Math.floor(time / 60);

	const seconds = time % 60;

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');


	function startCoutnDown() { 
		setisActive(true);
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout);
		setisActive(false);
		setTime(25*60);
	}

	useEffect(() => {
		if(isActive && time > 0){
			countdownTimeout = setTimeout(() => {
				setTime(time -1);
			}, 1000)
		} else if  (isActive && time === 0 ){
			sethasFinished(true);
			setisActive(false);
			startNewChallenges();
		}
	}, [isActive, time])


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