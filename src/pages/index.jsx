import NavBar from "@components/NavBar";
import React, { useEffect } from "react";
import styles from "../styles/NavBar.module.css"

export default function Home() {

  useEffect(() => {
    const header = document.getElementById("navBar");
    const stickyOffset = header.offsetTop;

    window.onscroll = function() {
      if(window.scrollY > stickyOffset) {
        header.classList.add(styles.sticky);
      } else {
        header.classList.remove(styles.sticky);
      }
    }
  }, [])
  
  return (
    <main>
      <div className="home-container">
        <span className="hollow-title">START</span>
        <span className="hollow-title">YOUR</span>
        <span className="full-title">JOURNEY</span>
      </div>
      <NavBar />
    </main>
  )
}
