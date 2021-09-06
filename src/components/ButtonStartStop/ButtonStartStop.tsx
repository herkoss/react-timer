import React from 'react';
import cn from 'classnames';
import styles from './ButtonStartStop.module.css';

interface ButtonStartStopProps {
  isCounting: boolean;
  setCounting: (isCounting: boolean) => void;
  startTimer: () => void;
  resetTimer: () => void;
}

export const ButtonStartStop = (props: ButtonStartStopProps) => {
  const { isCounting, setCounting, startTimer, resetTimer } = props;
  return (
    <button
      onClick={() => {
        setCounting(!isCounting);
        if (isCounting) {
          resetTimer();
        } else {
          startTimer();
        }
      }}
      className={cn(styles.btn, {
        [styles.start]: !isCounting,
        [styles.stop]: isCounting,
      })}
    >
      {isCounting ? 'Stop' : 'Start'}
    </button>
  );
};
