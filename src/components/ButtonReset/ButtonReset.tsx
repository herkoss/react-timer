import React, { Dispatch, SetStateAction } from 'react';
import styles from './ButtonReset.module.css';

interface ButtonResetProps {
  startTimer: () => void;
  resetTimer: () => void;
  setCounting: Dispatch<SetStateAction<boolean>>;
}

export const ButtonReset = (props: ButtonResetProps) => {
  const {startTimer, resetTimer, setCounting} = props;

  return (
    <button
      onClick={() => {
        resetTimer();
        startTimer();
        setCounting(true);
      }}
      className={styles.btn}
    >
      Reset
    </button>
  );
};
