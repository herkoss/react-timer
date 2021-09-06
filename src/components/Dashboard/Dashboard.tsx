import React from 'react';
import styles from "./Dashboard.module.css";

interface DashboardProps {
  h: number;
  m: number;
  s: number;
}

export const Dashboard = (props: DashboardProps) => {
  const { h, m, s } = props;
  return (
    <div className={styles.container}>
      <div className={styles.card}>{h < 10 ? '0' + h : h}</div>
      :
      <div className={styles.card}>{m < 10 ? '0' + m : m}</div>
      :
      <div className={styles.card}>{s < 10 ? '0' + s : s}</div>
    </div>
  );
};
