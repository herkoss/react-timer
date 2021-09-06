import React from 'react';
import styles from "./Dashboard.module.css";

interface DashboardProps {
  timeInSeconds: number;
}

export const Dashboard = ({timeInSeconds}: DashboardProps) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  const seconds = Math.floor(timeInSeconds - hours * 3600 - minutes * 60);

  return (
    <div className={styles.container}>
      <div className={styles.card}>{hours < 10 ? '0' + hours : hours}</div>
      :
      <div className={styles.card}>{minutes < 10 ? '0' + minutes : minutes}</div>
      :
      <div className={styles.card}>{seconds < 10 ? '0' + seconds : seconds}</div>
    </div>
  );
};
