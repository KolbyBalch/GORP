import NavBar from "@components/NavBar";
import React, { useEffect } from "react";
import styles from "@styles/NavBar.module.css"

export default function Expectations() {

    useEffect(() => {
        const header = document.getElementById("navBar");
        header.classList.add(styles.sticky);
        
      }, [])
      
  return (
    <main>
      <NavBar alwaysSticky />
    </main>
  )
}
