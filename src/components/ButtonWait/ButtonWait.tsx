import React from 'react';
import styles from './ButtonWait.module.css';

interface ButtonWaitProps {
  isCounting: boolean;
  setCounting: (isCounting: boolean) => void;
  stopTimer: () => void;
}

export const ButtonWait = (props: ButtonWaitProps) => {
  const { isCounting, setCounting, stopTimer } = props;
  return (
    <button
      onDoubleClick={() => {
        setCounting(!isCounting);
        if (isCounting) {
          stopTimer();
        }
      }}
      className={styles.btn}
    >
      Wait
    </button>
  );
};
