import React, { SetStateAction, useState } from 'react';
import { ButtonStartStop } from "./components/ButtonStartStop/ButtonStartStop";
import { ButtonWait } from "./components/ButtonWait/ButtonWait";
import { ButtonReset } from "./components/ButtonReset/ButtonReset";
import { Dashboard } from "./components/Dashboard/Dashboard";
import styles from './App.module.css';

function App() {
  const [isCounting, setCounting] = useState(false);
  const [time, setTime] = useState({ s:0, m:0, h:0 });
  const [intervalId, setIntervalId] = useState<SetStateAction<NodeJS.Timeout>>();

  let updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if(updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    setTime({ s:updatedS, m:updatedM, h:updatedH });
  };

  const startTimer = () => {
    setIntervalId(setInterval(run, 1000));
  };

  const resetTimer = () => {
    if (typeof intervalId === 'number') {
      clearInterval(intervalId);
    }
    setTime({s: 0, m: 0, h: 0});
    updatedS = 0;
    updatedH = 0;
    updatedM = 0;
  }

  const stopTimer = () => {
    if (typeof intervalId === 'number') {
      clearInterval(intervalId);
    }
  }

  return (
    <div className={styles.timerContainer}>
      <h1 className={styles.title}>ITOP1000 Timer</h1>
      <Dashboard
        h={time.h}
        m={time.m}
        s={time.s}
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
