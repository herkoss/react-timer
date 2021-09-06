import React, { SetStateAction, useState } from 'react';
import { ButtonStartStop } from "./components/ButtonStartStop/ButtonStartStop";
import { ButtonWait } from "./components/ButtonWait/ButtonWait";
import { ButtonReset } from "./components/ButtonReset/ButtonReset";
import { Dashboard } from "./components/Dashboard/Dashboard";
import styles from './App.module.css';

function App() {
  const [isCounting, setCounting] = useState(false);
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<SetStateAction<NodeJS.Timeout>>();

  const startTimer = () => {
    setIntervalId(setInterval(() => {
      setTimeInSeconds(seconds => seconds + 1);
    }, 1000));
  };

  const stopTimer = () => {
    if (typeof intervalId === 'number') {
      clearInterval(intervalId);
    }
  }

  const resetTimer = () => {
    stopTimer();
    setTimeInSeconds(0);
  }

  return (
    <div className={styles.timerContainer}>
      <h1 className={styles.title}>ITOP1000 Timer</h1>
      <Dashboard
        timeInSeconds={timeInSeconds}
      />
      <div className={styles.buttonsWrapper}>
        <ButtonStartStop
          isCounting={isCounting}
          setCounting={setCounting}
          startTimer={startTimer}
          resetTimer={resetTimer}
        />
        <ButtonWait
          isCounting={isCounting}
          setCounting={setCounting}
          stopTimer={stopTimer}
        />
        <ButtonReset
          setCounting={setCounting}
          startTimer={startTimer}
          resetTimer={resetTimer}
        />
      </div>
    </div>
  );
}

export default App;
