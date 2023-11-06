import NavBar from "@components/NavBar";
import React, { useEffect } from "react";
import styles from "@styles/NavBar.module.css"

export default function Home() {

    useEffect(() => {
        const header = document.getElementById("navBar");
        header.classList.add(styles.sticky);
        
      }, [])
      
  return (
    <main>
      <NavBar alwaysSticky />
      <div className="home-container">
        <span className="hollow-title">START</span>
        <span className="hollow-title">YOUR</span>
        <span className="full-title">JOURNEY</span>
      </div>
    </main>
  )
}
