import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {

minutes: number;
seconds: number;
hasFinished: boolean;
isActive: boolean;
startCoutnDown: () => void;
resetCountdown: () => void;

}

interface CountdownProviderProps{
  children: ReactNode;
} 


export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;


export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenges } = useContext(ChallengesContext);

	const [time, setTime] = useState(2);
	const [isActive, setisActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);


	const minutes = Math.floor(time / 60);

	const seconds = time % 60;
	function startCoutnDown() { 
		setisActive(true);
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout);
		setisActive(false);
		setTime(2);
		setHasFinished(false)
	}

	useEffect(() => {
		if(isActive && time > 0){
			countdownTimeout = setTimeout(() => {
				setTime(time -1);
			}, 1000)
		} else if  (isActive && time === 0 ){
			setHasFinished(true);
			setisActive(false);
			startNewChallenges();
		}
	}, [isActive, time])


  return(
    <CountdownContext.Provider
    value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCoutnDown,
      resetCountdown,
    }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
