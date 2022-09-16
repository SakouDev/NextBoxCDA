import React from "react";
import styles from '../styles/Home.module.css'

export default function Title(props) {


  return (
    <>
      <h1>Welcome <span className={styles.name}>{props.name}</span> to the Next_Box</h1>
      <p>Coucou les amis, aujourd&apos;hui on apprend REACT avec NextJs</p>
    </>
  );
}
