import React from "react";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <p>Développer par Alexis</p>
         <Image className={styles.logo} src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> explored by Alexis
         <Link href='about'>  Test Link</Link>
      </footer>
    </>
  );
}
